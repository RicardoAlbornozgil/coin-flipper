import React from 'react';

function CoinFlipper({ flipCoin }) {
  return (
    <button onClick={flipCoin}>
      Flip the coin!
    </button>
  );
}

export default CoinFlipper;
