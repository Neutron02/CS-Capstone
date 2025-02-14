import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import mockMarketplaceData from '../data/MarketplaceData';
import Sidebar from './Sidebar';
import MarketplaceGrid from './MarketplaceGrid';

const UserPage = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  // find the current user from the data; if not found, use the first user.
  const currentUser = mockMarketplaceData.find((user) => user.user === userId) || mockMarketplaceData[0];

  // when a user is selected from the dropdown, navigate to that user's route.
  const handleUserSelect = (event) => {
    const selectedUserId = event.target.value;
    navigate(`/${selectedUserId}`);
  };

  // handler for the Offer button on each marketplace card.
  const handleOffer = (item) => {
    alert(`Offer from User ${currentUser.user} on ${item.title}`);

    // this should send a post request to /api/offer
    fetch("/api/offer", {
      method: "POST",
      header: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fromUser: currentUser.user,
        fromRating: currentUser.rating,
        toUser: item.user,
        toRating: item.rating,
        item: item.title
      }),
    });
  };

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
      <Sidebar 
        currentUser={currentUser} 
        users={mockMarketplaceData} 
        onUserSelect={handleUserSelect} 
      />
      <MarketplaceGrid onOffer={handleOffer} />
    </div>
  );
};

export default UserPage;
