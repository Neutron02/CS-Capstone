import React from 'react';

// Task is addition of required parameters for each card

function MarketplaceCard({user, title, rating}) {
  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-md">
      <h3 className="text-lg font-semibold">Item Title</h3>
      <p className="text-gray-600">Item Description</p>
    </div>
  );
}

export default MarketplaceCard;

