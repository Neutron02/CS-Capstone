import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Avatar } from './ui/avatar';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const Dashboard = () => {
  const [user, setUser] = useState({
    username: 'JohnDoe',
    rating: 4.5,
    metrics: {
      successRate: 0.9,
      disputeResolution: 0.8,
      transactionVolume: 0.5,
      confidenceAccuracy: 0.75,
    },
    items: [],
  });

  const [items, setItems] = useState([
    { id: 1, label: 'Want', name: 'Civil War Item', price: 50, username: 'Alice123', rating: 5, description: 'A rare Civil War artifact.' },
    { id: 2, label: 'Have', name: 'Vintage Clock', price: 30, username: 'Bob456', rating: 3.8, description: 'A beautiful vintage clock from the 1920s.' },
    { id: 3, label: 'Want', name: 'Rare Coin', price: 20, username: 'Charlie789', rating: 4.2, description: 'A rare coin from the early 1900s.' },
    { id: 4, label: 'Have', name: 'Antique Vase', price: 100, username: 'Diana321', rating: 4.7, description: 'An exquisite antique vase.' },
    { id: 5, label: 'Want', name: 'Historical Map', price: 75, username: 'Eve987', rating: 4.5, description: 'A historical map of Europe.' },
    { id: 6, label: 'Have', name: 'Collector Stamp', price: 10, username: 'Frank123', rating: 4.0, description: 'A rare collector stamp.' },
    { id: 7, label: 'Want', name: 'Old Book', price: 25, username: 'Grace456', rating: 4.8, description: 'An old and rare book.' },
    { id: 8, label: 'Have', name: 'Handcrafted Jewelry', price: 200, username: 'Helen789', rating: 4.9, description: 'Beautiful handcrafted jewelry.' },
    { id: 9, label: 'Want', name: 'Vintage Camera', price: 150, username: 'Ian654', rating: 4.6, description: 'A vintage camera in working condition.' },
    { id: 10, label: 'Have', name: 'Antique Table', price: 300, username: 'Jack321', rating: 4.4, description: 'An antique wooden table.' },
  ]);

  const [selectedItem, setSelectedItem] = useState(null);
  const [users, setUsers] = useState({
    Alice123: { successRate: 0.9, disputeResolution: 0.8, transactionVolume: 0.6, confidenceAccuracy: 0.7 },
    Bob456: { successRate: 0.7, disputeResolution: 0.5, transactionVolume: 0.4, confidenceAccuracy: 0.6 },
    Charlie789: { successRate: 0.85, disputeResolution: 0.75, transactionVolume: 0.5, confidenceAccuracy: 0.8 },
    Diana321: { successRate: 0.95, disputeResolution: 0.85, transactionVolume: 0.7, confidenceAccuracy: 0.9 },
    Frank123: { successRate: 0.8, disputeResolution: 0.7, transactionVolume: 0.5, confidenceAccuracy: 0.8 },
    Eve987: { successRate: 0.88, disputeResolution: 0.78, transactionVolume: 0.55, confidenceAccuracy: 0.82 },
  });

  const calculateRating = (metrics) => {
    if (!metrics) return 0;
    const weights = { successRate: 0.4, disputeResolution: 0.2, transactionVolume: 0.2, confidenceAccuracy: 0.2 };
    return (
      metrics.successRate * weights.successRate +
      metrics.disputeResolution * weights.disputeResolution +
      metrics.transactionVolume * weights.transactionVolume +
      metrics.confidenceAccuracy * weights.confidenceAccuracy
    ) * 5;
  };

  const handleOffer = () => {
    if (selectedItem) {
      const updatedUsers = { ...users };
      const userMetrics = updatedUsers[selectedItem.username];

      if (userMetrics) {
        userMetrics.successRate = Math.min(userMetrics.successRate + 0.01, 1);
        userMetrics.transactionVolume = Math.min(userMetrics.transactionVolume + 0.02, 1);
        updatedUsers[selectedItem.username] = userMetrics;
        setUsers(updatedUsers);
      }

      setUser((prevUser) => ({
        ...prevUser,
        metrics: {
          ...prevUser.metrics,
          successRate: Math.min(prevUser.metrics.successRate + 0.01, 1),
        },
      }));
    }
  };

  const handleItemClick = (item) => {
    const userMetrics = users[item.username] || null;
    if (!userMetrics) {
      console.warn(`User ${item.username} has no metrics initialized.`);
    }
    setSelectedItem({ ...item, metrics: userMetrics });
  };

  const addItem = (type, name, price, description) => {
    const newItem = {
      id: items.length + 1,
      label: type,
      name,
      price,
      username: user.username,
      rating: calculateRating(user.metrics),
      description,
    };

    setItems([...items, newItem]);
    setUser((prevUser) => ({
      ...prevUser,
      metrics: {
        ...prevUser.metrics,
        transactionVolume: Math.min(prevUser.metrics.transactionVolume + 0.05, 1),
      },
    }));
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-1/4 bg-gray-800 text-white p-4 flex flex-col items-center">
        <Avatar className="w-20 h-20 mb-4 bg-gray-600">{user.username[0]}</Avatar>
        <h1 className="text-xl font-bold mb-2">{user.username}</h1>
        <div className="text-center">
          <p className="text-sm">Rating</p>
          <Progress value={(calculateRating(user.metrics) / 5) * 100} className="h-2 w-full mb-2 bg-gray-700" />
          <p className="text-lg font-semibold">{calculateRating(user.metrics).toFixed(2)} / 5</p>
        </div>
        <div className="mt-4">
          <Button className="bg-blue-500 text-white px-4 py-2 mb-2 rounded" onClick={() => addItem('Want', 'New Want Item', 40, 'A description for a new want item')}>Add Want</Button>
          <Button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => addItem('Have', 'New Have Item', 80, 'A description for a new have item')}>Add Have</Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        {selectedItem ? (
          <div className="mb-6 p-4 border rounded-lg bg-white shadow">
            <h2 className="text-2xl font-bold mb-2">{selectedItem.name}</h2>
            <p className="text-gray-700 mb-2">Offered by: {selectedItem.username}</p>
            <div className="flex items-center mb-2">
              <Progress
                value={(calculateRating(selectedItem.metrics) / 5) * 100}
                className="h-2 w-20 mr-2 bg-gray-200"
              />
              <span className="text-sm text-gray-500">
                {calculateRating(selectedItem.metrics).toFixed(2)} / 5
              </span>
            </div>
            <p className="text-gray-700 mb-4">{selectedItem.description}</p>
            <Button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleOffer}>
              Offer
            </Button>
          </div>
        ) : (
          <h2 className="text-2xl font-bold mb-4">Marketplace</h2>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <Card
              key={item.id}
              className="border rounded-lg shadow bg-white cursor-pointer"
              onClick={() => handleItemClick(item)}
            >
              <CardContent className="p-4">
                <Badge
                  className={`mb-2 ${
                    item.label === 'Want' ? 'bg-blue-500 text-white' : 'bg-green-500 text-white'
                  }`}
                >
                  {item.label}
                </Badge>
                <p className="text-lg font-semibold mb-1">{item.name}</p>
                <p className="text-lg font-semibold mb-1">Price: ${item.price}</p>
                <p className="text-gray-700">User: {item.username}</p>
                <div className="flex items-center mt-2">
                  <Progress
                    value={(item.rating / 5) * 100}
                    className="h-2 w-20 mr-2 bg-gray-200"
                  />
                  <span className="text-sm text-gray-500">{item.rating} / 5</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
