import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByRole('link', {name: /learn react/i});
  expect(linkElement).toBeInTheDocument();
});

// test('esto es una pruebba', () => {
//   throw new Error('que dise')
// })