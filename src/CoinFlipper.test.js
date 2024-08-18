import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CoinFlipper from './CoinFlipper';

describe('CoinFlipper Component', () => {
  it('renders without crashing', () => {
    render(<CoinFlipper />);
  });

  it('initializes with no coin displayed and counters at zero', () => {
    const { container, getByText } = render(<CoinFlipper />);
    expect(container.querySelector('img')).not.toBeInTheDocument();

    // Match more flexibly in case the text is spread out over multiple elements
    expect(getByText((content, element) => content.includes('Heads: 0') && element.tagName.toLowerCase() === 'p')).toBeInTheDocument();
    expect(getByText((content, element) => content.includes('Tails: 0') && element.tagName.toLowerCase() === 'p')).toBeInTheDocument();
  });

  it('flips the coin and updates the result and counters correctly', () => {
    const { getByText, getByAltText } = render(<CoinFlipper />);

    // Mock Math.random to return a value corresponding to heads
    jest.spyOn(Math, 'random').mockReturnValue(0.3);
    const button = getByText((content) => content.includes('Flip the coin!'));
    fireEvent.click(button);

    // Check that heads was displayed and counter incremented
    expect(getByAltText('heads')).toBeInTheDocument();
    expect(getByText((content) => content.includes('Heads: 1'))).toBeInTheDocument();
    expect(getByText((content) => content.includes('Tails: 0'))).toBeInTheDocument();

    // Mock Math.random to return a value corresponding to tails
    jest.spyOn(Math, 'random').mockReturnValue(0.7);
    fireEvent.click(button);

    // Check that tails was displayed and counter incremented
    expect(getByAltText('tails')).toBeInTheDocument();
    expect(getByText((content) => content.includes('Heads: 1'))).toBeInTheDocument();
    expect(getByText((content) => content.includes('Tails: 1'))).toBeInTheDocument();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
});
