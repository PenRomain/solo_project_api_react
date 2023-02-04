import React, { useEffect, useState } from 'react';
import Card from './Card';

import { Plainswalker } from './types';

function CardSearcher(): JSX.Element {
  const [cards, setCards] = useState<Plainswalker[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://63db5810a3ac95cec59f7466.mockapi.io/api/beta/cards')
      .then((response) => response.json())
      .then((json) => setCards(json));
  }, []);

  return (
    <div className="search_page">
      <div className="searcher">
        <h1>MAKE YOUR SEARCH</h1>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          name="search"
          id="search_id"
        />
      </div>
      <div className="card_container">
        {search &&
          cards
            .filter(
              (card) =>
                card.name.toLowerCase().includes(search.toLowerCase()) ||
                (card.status.toLowerCase().includes(search.toLowerCase()) && (
                  <Card key={card.id} card={card} />
                ))
            )
            .map((card) => <Card key={card.id} card={card} />)}
      </div>
    </div>
  );
}

export default CardSearcher;
