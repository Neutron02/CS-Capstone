import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import '@testing-library/jest-dom';

test('Page changes based on user selection in the dropdown', async () => {
  render(
    <MemoryRouter initialEntries={['/0001']}>
      <App />
    </MemoryRouter>
  );

  // initial render
  expect(screen.getByText(/Current User: 0001/i)).toBeInTheDocument();

  // selection
  const dropdown = screen.getByRole('combobox');

  const users = ['0001', '0002', '0003', '0004', '0005']

  users.forEach(user => {
    fireEvent.change(dropdown, { target: { value: user } });

    waitFor(() => {
        expect(screen.getByText(/Current User: 0002/i)).toBeInTheDocument();
      });
  });
});

test('Test That Offer Button Sends a Post Request to api/offer', async () => {
  render(
    <MemoryRouter initialEntries={['/0001']}>
      <App />
    </MemoryRouter>
  );

  // initial render
  expect(screen.getByText(/Current User: 0001/i)).toBeInTheDocument();

  // get all the offer buttons
  const offerButtons = screen.getAllByText(/Offer/i);

  // loop through all the offer buttons
  offerButtons.forEach(offerButton => {

    // start at the first offer button and traverse the list
    const card = offerButton.closest('[data-testid=marketplace-card]');

    // find user, rating, title
    const user = card.querySelector('[data-testid=fromUser]');
    const rating = card.querySelector('[data-testid=fromRating]');
    const title = card.querySelector('[data-testid=item]');

    // click on every offer button
    fireEvent.click(offerButton);
    expect(fetch).toHaveBeenCalledWith('api/offer', {
      // method, header, body
      method: "POST",

      header: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        fromUser: expect(user),
        fromRating: expect(rating),
        item: expect(title)
      })
    });
  });
});