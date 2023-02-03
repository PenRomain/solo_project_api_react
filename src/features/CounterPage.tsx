import React, { useState } from 'react';
import logo from '../App/logo.svg';

function CounterPage(): JSX.Element {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function handlePlus(): void {
    setCount(count + step);
  }

  const handleMinus = (): void => {
    setCount(count - step);
  };

  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <input onChange={(e) => setStep(Number(e.target.value))} type="number" />
      <button type="button" onClick={handleMinus}>
        -
      </button>
      <p>step {step}</p>
      <p>count {count}</p>
      <button type="button" onClick={handlePlus}>
        +
      </button>
    </div>
  );
}

export default CounterPage;
