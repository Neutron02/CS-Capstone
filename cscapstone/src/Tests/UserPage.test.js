import React from 'react';
import { render, screen, within, fireEvent, waitFor } from '@testing-library/react';
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

  // user, rating
  const user = "0001";
  const rating = 5;

  // mock functions
  global.fetch = jest.fn();
  global.alert = jest.fn();

  // loop through all the offer buttons
  offerButtons.forEach(offerButton => {

    // start at the first offer button and traverse the list
    const card = offerButton.closest('[data-testid=marketplace-card]');

    // find user, rating, title
    const user2 = card.querySelector('[data-testid=user]');
    const rating2 = card.querySelector('[data-testid=rating]');
    const title = card.querySelector('[data-testid=title]');

    // click on every offer button
    fireEvent.click(offerButton);
    expect(fetch).toHaveBeenCalledWith('/api/offer', {
      // method, header, body
      method: "POST",

      header: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        fromUser: user,
        fromRating: rating,
        toUser: user2.textContent,
        toRating: Number(rating2.textContent.split(" ")[0]),
        item: title.textContent
      })
    });
  });
});