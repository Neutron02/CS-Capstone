import React from 'react';
import MarketplaceCard from './MarketplaceCard';
import mockMarketplaceData from '../data/MarketplaceData.js';

const MarketplaceGrid = ({ onOffer }) => {
  const marketplaceItems = mockMarketplaceData.flatMap(user =>
    [
      ...user.want.map(item => ({ ...item, user: user.user, rating: user.rating, isWant: true })),
      ...user.have.map(item => ({ ...item, user: user.user, rating: user.rating, isWant: false }))
    ]
  );

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-start w-full ml-6 mr-6 mt-6 mb-6"
      data-testid="marketplace-grid"
    >
      {marketplaceItems.map((item, index) => (
        <MarketplaceCard 
          key={index}
          index={index}
          user={item.user}
          title={item.title}
          description={item.description}
          rating={item.rating}
          price={item.price}
          want={item.isWant}
          onOffer={() => onOffer(item)}
        />
      ))}
    </div>
  );
};

export default MarketplaceGrid;
