//// filepath: /home/smscott/CS-Capstone/cscapstone/src/Components/UserPage.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import MarketplaceGrid from './MarketplaceGrid';
import Navbar from './Navbar';

const UserPage = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [refreshCounter, setRefreshCounter] = useState(0);
  const [disableModifications, setDisableModifications] = useState(false);
  // Toggle for simulation outcome: ON means offer clicks simulate success; OFF simulates failure.
  const [simulateOfferSuccess, setSimulateOfferSuccess] = useState(true);

  // Fetch users when userId changes.
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        const data = await response.json();
        setUsers(data);
        const user = data.find((user) => user.user_id === Number(userId)) || data[0];
        setCurrentUser(user);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, [userId]);

  // Update currentUser when users change.
  useEffect(() => {
    if (users.length > 0) {
      const user = users.find((user) => user.user_id === Number(userId)) || users[0];
      setCurrentUser(user);
    }
  }, [userId, users]);

  const updateUserRating = async () => {
    try {
      const response = await fetch(`/api/users/${currentUser.user_id}/rating`);
      const json = await response.json();
      // Update the current user's rating.
      setCurrentUser((prev) => ({ ...prev, rating: json.rating }));
      // Also update the users array so the dropdown reflects the new rating.
      setUsers((prev) =>
        prev.map((user) =>
          user.user_id === currentUser.user_id ? { ...user, rating: json.rating } : user
        )
      );
    } catch (error) {
      console.error('Error fetching user rating:', error);
    }
  };

  const handleUserSelect = (event) => {
    const selectedUserId = event.target.value;
    navigate(`/${selectedUserId}`);
  };

  const toggleModificationMode = () => {
    setDisableModifications((prev) => !prev);
  };

  // Toggle simulation mode for offer clicks.
  const toggleSimulationOfferSuccess = () => {
    setSimulateOfferSuccess((prev) => !prev);
  };

  const handleAddWant = async () => {
    if (disableModifications) return;
    const newItem = {
      title: 'Generic Want Item',
      description: 'A generic want item description',
      price: 100,
      isWant: true,
      user_id: currentUser.user_id,
    };
    await fetch('/api/marketplace-items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newItem),
    });
    console.log('Added Want Item:', newItem);
    setRefreshCounter((prev) => prev + 1);
    await updateUserRating();
  };

  const handleAddHave = async () => {
    if (disableModifications) return;
    const newItem = {
      title: 'Generic Have Item',
      description: 'A generic have item description',
      price: 200,
      isWant: false,
      user_id: currentUser.user_id,
    };
    await fetch('/api/marketplace-items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newItem),
    });
    console.log('Added Have Item:', newItem);
    setRefreshCounter((prev) => prev + 1);
    await updateUserRating();
  };

  // When an offer is clicked, simulation mode determines outcome.
  const handleOffer = async (item) => {
    if (disableModifications) return;
    try {
      const eventType = simulateOfferSuccess ? 'offer_success' : 'offer_failure';
      await fetch('/api/simulate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: currentUser.user_id,
          eventType,
          itemId: item.item_id,
        }),
      });
      console.log(`Simulated ${eventType} event for offer on item`, item.item_id);
      setRefreshCounter((prev) => prev + 1);
      await updateUserRating();
    } catch (error) {
      console.error('Error processing offer:', error);
    }
  };

  if (!currentUser) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar 
        onAddWant={handleAddWant} 
        onAddHave={handleAddHave}
        disableModifications={disableModifications}
        toggleModificationMode={toggleModificationMode}
        simulateOfferSuccess={simulateOfferSuccess}
        onToggleSimulationOfferSuccess={toggleSimulationOfferSuccess}
      />
      <div className="flex pt-16">
        <div className="fixed top-16 left-0 w-80 h-full overflow-y-auto">
          <Sidebar 
            currentUser={currentUser} 
            users={users} 
            onUserSelect={handleUserSelect} 
          />
        </div>
        <div className="flex-1 ml-80">
          <MarketplaceGrid onOffer={handleOffer} refreshCounter={refreshCounter} />
        </div>
      </div>
    </>
  );
};

export default UserPage;