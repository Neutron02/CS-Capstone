import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MarketplaceGrid from '../Components/MarketplaceGrid';
import MarketplaceCard from '../Components/MarketplaceCard';
import mockMarketplaceData from '../data/MarketplaceData';
import Marketplace from '../Components/Marketplace';

test('renders MarketplaceGrid with multiple MarketplaceCards', () => {

  const marketplaceItems = mockMarketplaceData.flatMap(user =>
    [...user.want.map(item => ({ ...item, user: user.user, rating: user.rating })),
     ...user.have.map(item => ({ ...item, user: user.user, rating: user.rating }))]
  );
  // Render MarketplaceGrid with mock data
  render(
    <MarketplaceGrid />
  );

  // Ensure the correct number of MarketplaceCards exist
  const cards = screen.getAllByTestId('marketplace-card');
  expect(cards.length).toBe(marketplaceItems.length); // Check total number of items

  mockMarketplaceData.forEach((item) => {
    expect(screen.getByText(item.title)).toBeInTheDocument(); // Check title
    expect(screen.getByText(`Sold by: ${item.user}`)).toBeInTheDocument(); // Check user
    expect(screen.getByText(`Rating: ${item.rating} ⭐`)).toBeInTheDocument(); // Check rating
    expect(screen.getByText(item.description)).toBeInTheDocument(); // Check description
    expect(screen.getByText(`Price: $${item.price}`)).toBeInTheDocument(); // Check price
   });
});
