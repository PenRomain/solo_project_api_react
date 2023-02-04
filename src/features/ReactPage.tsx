import React, { useState } from 'react';
import logo from '../App/logo.svg';

function ReactPage(): JSX.Element {
  const [size, setSize] = useState(0);
  const [speed, setSpeed] = useState(20);

  function handlePlus(): void {
    setSize(size + 5);
  }

  const handleMinus = (): void => {
    setSize(size - 5);
  };

  const whStyle = { width: '40px', height: '40px' };

  return (
    <div>
      <img
        src={logo}
        style={{
          animation: `App-logo-spin infinite ${speed}s linear`,
          width: `${size}px`,
        }}
        className="App-logo"
        alt="logo"
      />
      <p>LETS PLAY THE REACT</p>
      <input
        onChange={(e) => setSpeed(Number(e.target.value))}
        type="number"
        defaultValue={speed}
      />
      <p>SPEED {speed}</p>
      <p>SIZE {size}</p>
      <button style={whStyle} type="button" onClick={handleMinus}>
        -
      </button>
      <button style={whStyle} type="button" onClick={handlePlus}>
        +
      </button>
    </div>
  );
}

export default ReactPage;
