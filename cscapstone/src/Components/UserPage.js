import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import mockMarketplaceData from '../data/MarketplaceData';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import MarketplaceGrid from './MarketplaceGrid';
import UserDataUpdater from './UserDataUpdater'; 

const UserPage = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  // State-based “database”
  const [users, setUsers] = useState(mockMarketplaceData);

  // find the current user from the data; if not found, use the first user.
  const currentUser = users.find(user => user.user === userId) || users[0];

  // when a user is selected from the dropdown, navigate to that user's route.
  const handleUserSelect = (event) => {
    const selectedUserId = event.target.value;
    navigate(`/${selectedUserId}`);
  };

  // handler for the Offer button on each marketplace card.
  const handleOffer = (item) => {
    alert(`Offer from User ${currentUser.user} on ${item.title}`);
    // this should send a post request to /api/offer
  };

  // A unified function for new items (request/offer).
  const handleNewItem = async (type, formData) => {
    // If we have an API, we’d do something like:
    // const response = await fetch('/api/new-item', { method: 'POST', body: JSON.stringify({ userId: currentUser.user, type, formData }) });
    // const newItemData = await response.json();
    
    // For now, we rely on the local approach:
    const updatedUsers = UserDataUpdater(users, currentUser.user, type, formData);
    setUsers(updatedUsers);

    // Use the item returned from the API to update local state
    // Or re-fetch all users from the API to keep them in sync
  };

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
      <Sidebar
        currentUser={currentUser}
        users={users}
        onUserSelect={handleUserSelect}
      />
      <MarketplaceGrid
        users={users}
        onOffer={handleOffer}
      />
      <Navbar onForm={handleNewItem} />
    </div>
  );
};

export default UserPage;
