import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

test('renders App with Sidebar,MarketplaceGrid, and Navbar', () => {
  // initial route
  render(
    <MemoryRouter initialEntries={['/0001']}>
      <App />
    </MemoryRouter>
  );
  
  expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  expect(screen.getByTestId('marketplace-grid')).toBeInTheDocument();
  expect(screen.getByTestId('navbar')).toBeInTheDocument();
});
