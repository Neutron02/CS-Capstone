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
