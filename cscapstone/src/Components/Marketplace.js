import React from 'react';
import MarketplaceGrid from './MarketplaceGrid';

// Component is deprecated and used only for testing by rendering the marketplace grid

const Marketplace = () => {
  return (
    <div className="flex-1 bg-white p-6 overflow-y-auto">
      <h1 className="text-2xl font-semibold mb-4">Marketplace</h1>
      <MarketplaceGrid />
    </div>
  );
}

export default Marketplace;

