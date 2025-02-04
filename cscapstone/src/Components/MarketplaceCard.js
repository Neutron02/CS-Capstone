import React from 'react';

// Task is addition of required parameters for each card
const MarketplaceCard = ({ index, user, title, description, rating, price, want }) => {
  return (
    <div
      key={index}
      data-testid="marketplace-card"
      className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {want ? (
            <span className="bg-green-200 text-green-800 text-xs font-semibold px-3 py-1 rounded-full" data-testid="want">
              Want
            </span>
          ) : (
            <span className="bg-blue-200 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full" data-testid="have">
              Have
            </span>
          )}
          <h3 className="text-xl font-bold text-gray-800" data-testid="title">{title}</h3>
        </div>
        <p className="text-lg font-semibold text-gray-800" data-testid="price">${price}</p>
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-4" data-testid="description">{description}</p>

      {/* Footer */}
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>
          Sold by: <span className="text-gray-700 font-medium" data-testid="">{user}</span>
        </span>
        <span>{rating} ⭐</span>
      </div>
    </div>
  );
};

export default MarketplaceCard;

