import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MarketplaceGrid from '../Components/MarketplaceGrid';
import MarketplaceCard from '../Components/MarketplaceCard';
import mockMarketplaceData from '../data/MarketplaceData';
import Marketplace from '../Components/Marketplace';

test('renders MarketplaceGrid with multiple MarketplaceCards', () => {
  // Render MarketplaceGrid with mock data
  render(
    <MarketplaceGrid items={mockMarketplaceData} />
  );

  // Ensure the correct number of MarketplaceCards exist
  const cards = screen.getAllByTestId('marketplace-card');
  expect(cards.length).toBe(mockMarketplaceData.length);

  mockMarketplaceData.forEach((item) => {
    expect(screen.getByText(item.title)).toBeInTheDocument(); // Check title
    expect(screen.getByText(`Sold by: ${item.user}`)).toBeInTheDocument(); // Check user
    expect(screen.getByText(`Rating: ${item.rating} ⭐`)).toBeInTheDocument(); // Check rating
  });
});
