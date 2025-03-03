const express = require('express');
const router = express.Router();
const db = require('../db');

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

    res.json({
      fromUser: fromUser[0],
      toUser: toUser[0],
      item: item[0]
    });
  } catch (error) {
    console.error('Error querying the database:', error);
    next(error);
  }
});

router.get('/users', async (req, res, next) => {
  try {
    const [users] = await db.query('SELECT * FROM users');
    res.json(users);
  } catch (error) {
    console.error('Error querying the database:', error);
    next(error);
  }
});

router.get('/marketplace-items', async (req, res, next) => {
  try {
    const [items] = await db.query(`
      SELECT items.*, users.rating 
      FROM items 
      JOIN users ON items.user_id = users.user_id
    `);
    res.json(items);
  } catch (error) {
    console.error('Error querying the database:', error);
    next(error);
  }
});

router.use((err, req, res, next) => {
  console.error('Error handling middleware:', err.stack);
  res.status(500).json({ error: err.message });
});

module.exports = router;