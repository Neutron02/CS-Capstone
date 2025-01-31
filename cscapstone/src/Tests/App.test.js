import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders App with Sidebar and MarketplaceGrid', () => {
  render(<App />);
  expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  expect(screen.getByTestId('marketplace-grid')).toBeInTheDocument();
});
