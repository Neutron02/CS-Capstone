import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../Components/Navbar';

describe('Navbar with Form Integration', () => {
  test('renders Navbar and opens "New Request" form on click', () => {
    render(<Navbar />);

    // Check if Navbar rendered
    expect(screen.getByText('We Find It')).toBeInTheDocument();

    // Click "REQUEST"
    fireEvent.click(screen.getByText('REQUEST'));

    // Check if "New Request" form appears
    expect(screen.getByText('New Request')).toBeInTheDocument();
  });

  test('opens "New Offer" form on click', () => {
    render(<Navbar />);

    // Click "OFFER"
    fireEvent.click(screen.getByText('OFFER'));

    // Check if "New Offer" form appears
    expect(screen.getByText('New Offer')).toBeInTheDocument();
  });
});
