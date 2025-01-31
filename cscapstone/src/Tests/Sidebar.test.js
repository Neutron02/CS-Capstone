import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Sidebar from '../Components/Sidebar';

describe('Sidebar Component', () => {
    test('renders Sidebar component', () => {
        render(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
});