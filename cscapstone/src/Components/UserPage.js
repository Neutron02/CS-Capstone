import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import MarketplaceGrid from './MarketplaceGrid';

const UserPage = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        const data = await response.json();
        setUsers(data);
        console.log('Fetched users:', data);
        const user = data.find((user) => user.user_id === Number(userId)) || data[0];
        setCurrentUser(user);
        console.log('Initial currentUser:', user);
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
      console.log('Updated currentUser:', user);
    }
  }, [userId, users]);

  const handleUserSelect = (event) => {
    const selectedUserId = event.target.value;
    console.log('Selected userId:', selectedUserId);
    navigate(`/${selectedUserId}`);
  };

  const handleOffer = async (item) => {
    try {
      const offerData = {
        fromUserId: currentUser.user_id,
        toUserId: item.user_id,
        itemId: item.item_id
      };

      console.log('Sending offer data:', offerData);

      const response = await fetch('/api/offer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(offerData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Received response data:', data);
      alert(`Offer from User ${data.fromUser.user_id} on ${data.item.title} to User ${data.toUser.user_id}`);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  if (!currentUser) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
      <Sidebar 
        currentUser={currentUser} 
        users={users} 
        onUserSelect={handleUserSelect} 
      />
      <MarketplaceGrid onOffer={handleOffer} />
    </div>
  );
};

export default UserPage;