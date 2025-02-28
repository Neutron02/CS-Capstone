import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../Components/Navbar';

describe('Navbar with Form Integration', () => {
  test('opens "New Request" form on click', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    // Check if Navbar rendered
    expect(screen.getByText('We Find It')).toBeInTheDocument();
  });

  test('opens "New Offer" form on click', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    // Click "OFFER"
    fireEvent.click(screen.getByText('OFFER'));

    // Check if "New Offer" form appears
    expect(screen.getByText('New Offer')).toBeInTheDocument();
  });
});