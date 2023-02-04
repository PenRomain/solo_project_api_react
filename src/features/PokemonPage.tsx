import React, { useState } from 'react';
import { Pokemon } from './types';

export default function PokemonPage({
  pokemon,
}: {
  pokemon: Pokemon;
}): JSX.Element {
  const [hide, setHidden] = useState('visible');

  function handlerHide(): void {
    if (hide === 'hidden') {
      setHidden('visible');
    } else if (hide === 'visible') {
      setHidden('hidden');
    } else if (hide === 'pokemon') {
      setHidden('visible');
    }
  }
  return (
    <div onClick={handlerHide} className="card_image">
      <img src={pokemon.gif} alt="" />
    </div>
  );
}
