import React from 'react';
import MarketplaceCard from './MarketplaceCard';
import mockMarketplaceData from '../data/MarketplaceData.js';

/* Task is dynamic rendering based on source of data for marketplace cards */
// Task is modifying the size and placement of grids based on screen size, or based on card content
const MarketplaceGrid = ({items}) => {

  const marketplaceItems = mockMarketplaceData.flatMap(user =>
    [...user.want.map(item => ({ ...item, user: user.user, rating: user.rating })),
     ...user.have.map(item => ({ ...item, user: user.user, rating: user.rating }))]
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-start w-full ml-6 mr-6" data-testid="marketplace-grid">
      {marketplaceItems.map((item, index) => (
        <MarketplaceCard 
          key={index}
          user={item.user}
          title={item.title}
          description={item.description}
          rating={item.rating}
          price={item.price}
        />
      ))}
    </div>
  );
}

export default MarketplaceGrid;

