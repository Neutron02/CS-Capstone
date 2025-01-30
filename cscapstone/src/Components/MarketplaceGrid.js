import React from 'react';
import MarketplaceCard from './MarketplaceCard';

/* Task is dynamic rendering based on source of data for marketplace cards */
// Task is modifying the size and placement of grids based on screen size, or based on card content
function MarketplaceGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-start w-full ml-6 mr-6">
      <MarketplaceCard />
      <MarketplaceCard />
      <MarketplaceCard />
      <MarketplaceCard />
      <MarketplaceCard />
      <MarketplaceCard />
      <MarketplaceCard />
      <MarketplaceCard />
      <MarketplaceCard />
      <MarketplaceCard />
    </div>
  );
}

export default MarketplaceGrid;

