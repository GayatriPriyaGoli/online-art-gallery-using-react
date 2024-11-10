import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';  // Import MemoryRouter
import App from './App';

test('renders home link', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const homeLink = screen.getByRole('link', { name: /Home/i });
  expect(homeLink).toBeInTheDocument();
});


