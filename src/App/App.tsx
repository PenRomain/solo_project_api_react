import React, { useState } from 'react';

import './App.css';

import CardSearcher from '../features/CardSearcher';
import ReactPage from '../features/ReactPage';
// import { Plainswalker } from '../features/types';

function App(): JSX.Element {
  // const [count, setCount] = useState(0);
  // const [step, setStep] = useState(1);
  const [page, setPage] = useState('react');
  // const [cards, setCards] = useState<Plainswalker[]>([]);

  // function handlePlus(): void {
  //   setCount(count + step);
  // }

  // const handleMinus = (): void => {
  //   setCount(count - step);
  // };

  // React.ChangeEvent
  // React.FormEvent
  // React.MouseEvent

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
  //   setStep(Number(event.target.value));
  // };

  return (
    <div className="App">
      <header className="App-header">
        <div className="buttons">
          <button
            className="main_buttons"
            type="button"
            onClick={() => setPage('react')}
          >
            REACT
          </button>
          <button
            className="main_buttons"
            type="button"
            onClick={() => setPage('cards')}
          >
            CARDS
          </button>
        </div>
        {page === 'react' && <ReactPage />}
        {page === 'cards' && <CardSearcher />}
      </header>
    </div>
  );
}

export default App;
