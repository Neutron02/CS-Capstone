import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import MarketplaceGrid from '../Components/MarketplaceGrid';
import MarketplaceCard from '../Components/MarketplaceCard';
import mockMarketplaceData from '../data/MarketplaceData';
import Marketplace from '../Components/Marketplace';

test('renders MarketplaceGrid with multiple MarketplaceCards', () => {

  const marketplaceItems = mockMarketplaceData.flatMap(user =>
    [...user.want.map(item => ({ ...item, user: user.user, rating: user.rating, isWant: true })),
     ...user.have.map(item => ({ ...item, user: user.user, rating: user.rating, isWant: false }))]
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

    const titleElement = cardScope.getByTestId('title');
    expect(titleElement).toHaveTextContent(item.title);

    // Description
    const descriptionElement = cardScope.getByTestId('description');
    expect(descriptionElement).toHaveTextContent(item.description);

    // Price
    const priceElement = cardScope.getByTestId('price');
    expect(priceElement).toHaveTextContent(`$${item.price}`);

    // "Want" or "Have" label
    if (item.isWant) {
      expect(cardScope.getByTestId('want')).toBeInTheDocument();
      // Ensure "have" is not present for a "want" item
      expect(cardScope.queryByTestId('have')).not.toBeInTheDocument();
    } else {
      expect(cardScope.getByTestId('have')).toBeInTheDocument();
      // Ensure "want" is not present for a "have" item
      expect(cardScope.queryByTestId('want')).not.toBeInTheDocument();
    }

    // Rating
    // In your component, rating is shown in text form, e.g. "3 ⭐"
    expect(card).toHaveTextContent(`${item.rating} ⭐`);

    // User
    // The card shows "Sold by: <user>", so check for that text
    expect(card).toHaveTextContent(`Sold by: ${item.user}`);

   });
});
