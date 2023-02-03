import React, { useState } from 'react';

import './App.css';

import CardSearcher from '../features/CardSearcher';
import CounterPage from '../features/CounterPage';
// import { Plainswalker } from '../features/types';

function App(): JSX.Element {
  // const [count, setCount] = useState(0);
  // const [step, setStep] = useState(1);
  const [page, setPage] = useState('counter');
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
          <button type="button" onClick={() => setPage('counter')}>
            Counter
          </button>
          <button type="button" onClick={() => setPage('cards')}>
            CARDS
          </button>
        </div>
        {page === 'counter' && <CounterPage />}
        {page === 'cards' && <CardSearcher />}
      </header>
    </div>
  );
}

export default App;
