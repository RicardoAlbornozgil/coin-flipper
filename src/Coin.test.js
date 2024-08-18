import React from 'react';
import { render } from '@testing-library/react';
import Coin from './Coin';

describe('Coin Component', () => {
  it('does not render the coin image when result is null', () => {
    const { container } = render(<Coin result={null} />);
    expect(container.querySelector('img')).not.toBeInTheDocument();
  });

  it('renders the heads image when result is heads', () => {
    const { getByAltText } = render(<Coin result="heads" />);
    const img = getByAltText('heads');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'heads.webp'); // Update this to match the correct path
  });

  it('renders the tails image when result is tails', () => {
    const { getByAltText } = render(<Coin result="tails" />);
    const img = getByAltText('tails');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'tails.webp'); // Update this to match the correct path
  });
});
