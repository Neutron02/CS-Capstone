import React from 'react';
import MarketplaceGrid from './MarketplaceGrid';

// Task is adjusting marketplace grid for mock presentation

function Marketplace() {
  return (
    <div className="flex-1 bg-white p-6 overflow-y-auto">
      <h1 className="text-2xl font-semibold mb-4">Marketplace</h1>
      <MarketplaceGrid />
    </div>
  );
}

export default Marketplace;

