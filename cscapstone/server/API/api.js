const express = require('express');
const router = express.Router();
const db = require('../db');

// POST new marketplace item and log user history event for posting want/have
router.post('/marketplace-items', async (req, res, next) => {
  try {
    const { title, description, price, isWant, user_id } = req.body;
    // Insert new item into items table
    const [result] = await db.query(
      'INSERT INTO items (title, description, price, isWant, user_id) VALUES (?, ?, ?, ?, ?)',
      [title, description, price, isWant, user_id]
    );

    // Log the post event in user_history table.
    const actionType = isWant ? 'post_want' : 'post_have';
    await db.query(
      'INSERT INTO user_history (user_id, action_type, item_id) VALUES (?, ?, ?)',
      [user_id, actionType, result.insertId]
    );

    res.status(201).json({ message: 'Item added successfully', itemId: result.insertId });
  } catch (error) {
    console.error('Error adding item:', error);
    next(error);
  }
});

// POST offer endpoint: process offer and log the event in user_history
router.post('/offer', async (req, res, next) => {
  try {
    const { fromUserId, toUserId, itemId } = req.body;

    console.log('Received offer data:', req.body);

    if (!fromUserId || !toUserId || !itemId) {
      console.error('Missing required fields:', { fromUserId, toUserId, itemId });
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const [fromUser] = await db.query('SELECT * FROM users WHERE user_id = ?', [fromUserId]);
    const [toUser] = await db.query('SELECT * FROM users WHERE user_id = ?', [toUserId]);
    const [item] = await db.query('SELECT * FROM items WHERE item_id = ?', [itemId]);

    if (!fromUser.length || !toUser.length || !item.length) {
      console.error('User or item not found:', { fromUser, toUser, item });
      return res.status(404).json({ error: 'User or item not found' });
    }

    if (fromUserId === item[0].user_id) {
      console.error('Cannot make an offer on your own item:', { fromUserId, itemUserId: item[0].user_id });
      return res.status(400).json({ error: 'You cannot make an offer on your own item' });
    }

    // Log the offer event in user_history.
    await db.query(
      'INSERT INTO user_history (user_id, action_type, item_id) VALUES (?, ?, ?)',
      [fromUserId, 'offer', itemId]
    );

    res.json({
      fromUser: fromUser[0],
      toUser: toUser[0],
      item: item[0]
    });
  } catch (error) {
    console.error('Error processing offer:', error);
    next(error);
  }
});

// GET all users endpoint.
router.get('/users', async (req, res, next) => {
  try {
    const [users] = await db.query('SELECT * FROM users');
    res.json(users);
  } catch (error) {
    console.error('Error querying users:', error);
    next(error);
  }
});

// GET marketplace items endpoint.
router.get('/marketplace-items', async (req, res, next) => {
  try {
    const [items] = await db.query(`
      SELECT items.*, users.rating 
      FROM items 
      JOIN users ON items.user_id = users.user_id
    `);
    res.json(items);
  } catch (error) {
    console.error('Error querying items:', error);
    next(error);
  }
});


// New endpoint to simulate an event
router.post('/simulate', async (req, res, next) => {
  try {
    const { userId, eventType, itemId } = req.body;
    // eventType should be either 'offer_success' or 'offer_failure'
    if (!userId || !eventType) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    // For simulation, if itemId is not provided, use a default valid item id (adjust as needed)
    const validItemId = itemId || 1;
    await db.query(
      'INSERT INTO user_history (user_id, action_type, item_id) VALUES (?, ?, ?)',
      [userId, eventType, validItemId]
    );
    res.json({ message: 'Simulation event inserted' });
  } catch (error) {
    console.error('Error simulating event:', error);
    next(error);
  }
});

// Modified calculateUserRating with dynamic success rate.
// Count successes vs. failures.
async function calculateUserRating(userId, options = {}) {
  const disputeResolution = options.disputeResolution ? parseFloat(options.disputeResolution) : 0.8;
  const confidenceAccuracy = options.confidenceAccuracy ? parseFloat(options.confidenceAccuracy) : 0.75;

  // Get the user's last reset time.
  const [userData] = await db.query('SELECT rating, last_reset FROM users WHERE user_id = ?', [userId]);
  const lastReset = userData[0].last_reset; // could be null

  // Count offer events only after last_reset (if set).
  let offerCountQuery = 'SELECT COUNT(*) AS count FROM user_history WHERE user_id = ? AND (action_type = "offer_success" OR action_type = "offer_failure")';
  let queryParams = [userId];
  if (lastReset) {
    offerCountQuery += ' AND timestamp > ?';
    queryParams.push(lastReset);
  }
  const [offerCountRes] = await db.query(offerCountQuery, queryParams);
  const offerCount = offerCountRes[0].count;

  if (offerCount === 0) {
    // No offer events after reset; just return stored rating.
    console.log(`No offer events for user ${userId} since reset; returning stored rating: ${userData[0].rating}`);
    return userData[0].rating;
  }

  // Get counts of successful and failed offers after last_reset.
  let successQuery = 'SELECT COUNT(*) AS successCount FROM user_history WHERE user_id = ? AND action_type = "offer_success"';
  let failureQuery = 'SELECT COUNT(*) AS failureCount FROM user_history WHERE user_id = ? AND action_type = "offer_failure"';
  queryParams = [userId];
  if (lastReset) {
    successQuery += ' AND timestamp > ?';
    failureQuery += ' AND timestamp > ?';
    queryParams.push(lastReset);
  }
  const [successResult] = await db.query(successQuery, queryParams);
  const [failureResult] = await db.query(failureQuery, queryParams);
  const successCount = successResult[0].successCount;
  const failureCount = failureResult[0].failureCount;
  const totalEvents = successCount + failureCount;

  // Compute successRate.
  const successRate = totalEvents > 0 ? successCount / totalEvents : 0.5;

  // Transaction Volume (TV): sum prices of items.
  const [volumeResult] = await db.query(
    'SELECT IFNULL(SUM(price), 0) AS totalVolume FROM items WHERE user_id = ?',
    [userId]
  );
  const totalVolume = volumeResult[0].totalVolume;
  const transactionVolume = Math.min(1, Math.log(1 + totalVolume) / 5);

  // Weights for the composite score:
  // - successRate contributes 40%
  // - disputeResolution contributes 20%
  // - transactionVolume contributes 20%
  // - confidenceAccuracy contributes 20%
  // compositeScore = (0.4 * successRate) +
  //                  (0.2 * disputeResolution) +
  //                  (0.2 * transactionVolume) +
  //                  (0.2 * confidenceAccuracy)
  const compositeScore =
    0.4 * successRate + 0.2 * disputeResolution + 0.2 * transactionVolume + 0.2 * confidenceAccuracy;

  console.log(`Calculating rating for user ${userId}:`);
  console.log(`  successCount=${successCount}  failureCount=${failureCount}`);
  console.log(`  successRate=${successRate}`);
  console.log(`  disputeResolution=${disputeResolution}`);
  console.log(`  totalVolume=${totalVolume}`);
  console.log(`  transactionVolume=${transactionVolume}`);
  console.log(`  confidenceAccuracy=${confidenceAccuracy}`);
  console.log(`  compositeScore=${compositeScore}`);

  const rating = Math.round(compositeScore * 100);
  console.log(`Computed rating for user ${userId} = ${rating}`);

  // Update the user's rating and record it.
  await db.query('UPDATE users SET rating = ? WHERE user_id = ?', [rating, userId]);
  await db.query('INSERT INTO rating_history (user_id, rating) VALUES (?, ?)', [userId, rating]);

  return rating;
}

// GET endpoint to retrieve a user's rating.
router.get('/users/:userId/rating', async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { disputeResolution, confidenceAccuracy } = req.query;
    const rating = await calculateUserRating(userId, { disputeResolution, confidenceAccuracy });
    res.json({ userId, rating });
  } catch (error) {
    console.error('Error calculating user rating:', error);
    next(error);
  }
});

router.get('/users/:userId/rating_history', async (req, res, next) => {
  try {
    const { userId } = req.params;
    // Adjust query as needed. Here we assume a table "rating_history" exists.
    const [results] = await db.query(
      'SELECT rating, timestamp FROM rating_history WHERE user_id = ? ORDER BY timestamp ASC',
      [userId]
    );
    res.json({ history: results });
  } catch (error) {
    next(error);
  }
});

// New endpoint to reset a user
router.post('/users/:userId/reset', async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { resetValue } = req.body;
    const newRating = resetValue !== undefined ? parseInt(resetValue, 10) : 50;
    await db.query('UPDATE users SET rating = ?, last_reset = NOW() WHERE user_id = ?', [newRating, userId]);
    // Delete rating history prior to reset
    await db.query('DELETE FROM rating_history WHERE user_id = ?', [userId]);
    res.json({ message: `User reset to rating ${newRating} and reset timestamp recorded; rating history cleared.` });
  } catch (error) {
    next(error);
  }
});

// Global error handling middleware.
router.use((err, req, res, next) => {
  console.error('Error handling middleware:', err.stack);
  res.status(500).json({ error: err.message });
});

module.exports = router;