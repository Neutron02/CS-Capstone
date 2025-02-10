import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Sidebar from '../Components/Sidebar';

describe('Sidebar Component', () => {
  test('renders Sidebar component', () => {
    // dummy props
    const currentUser = { user: '0001', rating: 5 };
    const users = [
      { user: '0001', rating: 5 },
      { user: '0002', rating: 4 }
    ];
    const onUserSelect = jest.fn();

    render(
      <Sidebar 
        currentUser={currentUser} 
        users={users} 
        onUserSelect={onUserSelect} 
      />
    );

    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    expect(screen.getByText(/Current User: 0001/i)).toBeInTheDocument();
  });
});
