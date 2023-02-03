import React from 'react';
import { Plainswalker } from './types';

function Card({ card }: { card: Plainswalker }): JSX.Element {
  return (
    <div className="card_block" data-id={card.id}>
      {/* <h3>{card.name}</h3>
      <p>{card.status}</p>
      <p>{card.description}</p> */}
      <div className="card_image">
        <img src={card.image} alt="" />
      </div>
    </div>
  );
}

export default Card;
