import React, { useEffect, useState } from 'react';
import MarketplaceCard from './MarketplaceCard';

const MarketplaceGrid = ({ onOffer, refreshCounter }) => {
  const [marketplaceItems, setMarketplaceItems] = useState([]);

  useEffect(() => {
    const fetchMarketplaceItems = async () => {
      try {
        const response = await fetch('/api/marketplace-items');
        const data = await response.json();
        setMarketplaceItems(data);
      } catch (error) {
        console.error('Error fetching marketplace items:', error);
      }
    };

    fetchMarketplaceItems();
  }, [refreshCounter]); // Re-run the fetch when refreshCounter changes

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-start w-full mr-6 mt-6 mb-6"
      data-testid="marketplace-grid"
    >
      {marketplaceItems.map((item, index) => (
        <MarketplaceCard 
          key={index}
          index={index}
          user={item.user_id}
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