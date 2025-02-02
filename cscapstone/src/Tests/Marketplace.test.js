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

  marketplaceItems.forEach((item, index) => {
    const card = cards[index];
    const cardScope = within(card);
    expect(cardScope.getByText(item.title)).toBeInTheDocument(); // Check title
    expect(cardScope.getByText(`Sold by: ${item.user}`)).toBeInTheDocument(); // Check user
    expect(cardScope.getByText(`Rating: ${item.rating} ⭐`)).toBeInTheDocument(); // Check rating
    expect(cardScope.getByText(item.description)).toBeInTheDocument(); // Check description
    expect(cardScope.getByText(`Price: $${item.price}`)).toBeInTheDocument(); // Check price
   });
});
