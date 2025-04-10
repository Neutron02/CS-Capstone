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
  const [simulateOfferSuccess, setSimulateOfferSuccess] = useState(true);
  // Advanced parameters state.
  const [disputeResolution, setDisputeResolution] = useState(0.8);
  const [confidenceAccuracy, setConfidenceAccuracy] = useState(0.75);

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

  useEffect(() => {
    if (users.length > 0) {
      const user = users.find((user) => user.user_id === Number(userId)) || users[0];
      setCurrentUser(user);
    }
  }, [userId, users]);

  const updateUserRating = async () => {
    try {
      // Pass slider values as query parameters.
      const response = await fetch(
        `/api/users/${currentUser.user_id}/rating?disputeResolution=${disputeResolution}&confidenceAccuracy=${confidenceAccuracy}`
      );
      const json = await response.json();
      setCurrentUser((prev) => ({ ...prev, rating: json.rating }));
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
      setRefreshCounter((prev) => prev + 1);
    } catch (error) {
      console.error('Error processing offer:', error);
    }
  };

  const handleReset = async (resetValue) => {
    try {
      const response = await fetch(`/api/users/${currentUser.user_id}/reset`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ resetValue })
      });
      const json = await response.json();
      // Update the state using the reset value instead of recalculating a new rating.
      setCurrentUser((prev) => ({ ...prev, rating: parseInt(resetValue, 10) }));
      setUsers((prev) =>
        prev.map((user) =>
          user.user_id === currentUser.user_id ? { ...user, rating: parseInt(resetValue, 10) } : user
        )
      );
      setRefreshCounter((prev) => prev + 1);
    } catch (error) {
      console.error('Error resetting user:', error);
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
            refreshCounter={refreshCounter}
            // Pass advanced parameters and handlers.
            disputeResolution={disputeResolution}
            setDisputeResolution={setDisputeResolution}
            confidenceAccuracy={confidenceAccuracy}
            setConfidenceAccuracy={setConfidenceAccuracy}
            onReset={handleReset}
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