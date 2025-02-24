import React from 'react';

const MarketplaceCard = ({ index, user, title, description, rating, price, want, onOffer }) => {
  return (
    <div
      key={index}
      data-testid="marketplace-card"
      className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
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
          Sold by: <span className="text-gray-700 font-medium" data-testid="user">{user}</span>
        </span>
        <span data-testid="rating">{rating} ⭐</span>
      </div>

      {/* Offer Button */}
      <button
        onClick={onOffer}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Offer
      </button>
    </div>
  );
};

export default MarketplaceCard;
