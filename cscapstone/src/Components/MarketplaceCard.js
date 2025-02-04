import React from 'react';

// Task is addition of required parameters for each card

const MarketplaceCard = ({user, title, description, rating, price}) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-md" data-testid="marketplace-card">
      <div className="flex justify-between">
        <p className="text-sm">#{user}</p>
        <p className="text-sm">Rating: {rating}</p>
      </div>
      <h3 className="text-lg font-semibold">{title} - ${price}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default MarketplaceCard;

