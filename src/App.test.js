import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('Coin Flipping App', () => {
  it('should not show a coin image on load', () => {
    const { queryByAltText } = render(<App />);
    expect(queryByAltText(/heads/i)).toBeNull();
    expect(queryByAltText(/tails/i)).toBeNull();
  });

  it('should update the count when flipping the coin', () => {
    jest.spyOn(Math, 'random')
      .mockReturnValueOnce(0.25)
      .mockReturnValueOnce(0.75);

    const { getByText, getByAltText } = render(<App />);

    const button = getByText('Flip the coin!');
    fireEvent.click(button);
    expect(getByAltText('heads')).toBeInTheDocument();
    expect(getByText(/Out of 1 flips/)).toBeInTheDocument();

    fireEvent.click(button);
    expect(getByAltText('tails')).toBeInTheDocument();
    expect(getByText(/Out of 2 flips/)).toBeInTheDocument();

    Math.random.mockRestore();
  });
});
