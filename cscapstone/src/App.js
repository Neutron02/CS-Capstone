// src/App.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import UserPage from './Components/UserPage';
import Navbar from './Components/Navbar';
import mockMarketplaceData from './data/MarketplaceData';

const App = () => {
  // Use the first user as the default.
  const defaultUserId = mockMarketplaceData[0].user;

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to={`/${defaultUserId}`} replace />} />
        <Route path="/:userId" element={<UserPage />} />
      </Routes>
    </>
  );
};

export default App;
