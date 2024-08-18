import React from 'react';
import './Coin.css';

function Coin({ result }) {
  if (result === null) {
    return null;
  }

  return (
    <div className="Coin">
      <img
        src={result === 'heads' ? require('./heads.webp') : require('./tails.webp')}
        alt={result}
      />
    </div>
  );
}

export default Coin;
