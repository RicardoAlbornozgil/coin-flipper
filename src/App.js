import React, { useState } from 'react';
import Coin from './Coin';
import CoinFlipper from './CoinFlipper';
import './App.css'

function App() {
  const [numFlips, setNumFlips] = useState(0);
  const [numHeads, setNumHeads] = useState(0);
  const [numTails, setNumTails] = useState(0);
  const [result, setResult] = useState(null);

  function flipCoin() {
    const isHeads = Math.random() < 0.5;
    setResult(isHeads ? 'heads' : 'tails');
    setNumFlips(numFlips + 1);
    if (isHeads) {
      setNumHeads(numHeads + 1);
    } else {
      setNumTails(numTails + 1);
    }
  }

  return (
    <div className="App">
      <h1>Let's flip a coin!</h1>
      <Coin result={result} />
      <CoinFlipper flipCoin={flipCoin} />
      <p>
        Out of {numFlips} flips, there have been {numHeads} heads and {numTails} tails.
      </p>
    </div>
  );
}

export default App;
