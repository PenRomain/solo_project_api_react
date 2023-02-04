import React, { useEffect, useState } from 'react';
import PokemonPage from './PokemonPage';

import { Plainswalker, Pokemon } from './types';

// import Pokemonsters from './Pokemonsters';
let random: number;
function randomize(): number {
  random = Math.floor(Math.random() * 7);

  return random;
}

function Card({ card }: { card: Plainswalker }): JSX.Element {
  const [hide, setHidden] = useState('visible');
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  function handlerHide(): void {
    if (hide === 'hidden') {
      setHidden('visible');
    } else if (hide === 'visible') {
      setHidden('hidden');
    } else if (hide === 'pokemon') {
      setHidden('visible');
    } else if (random) {
      setHidden('pokemon');
    }
  }

  useEffect(() => {
    fetch('https://63db5810a3ac95cec59f7466.mockapi.io/api/beta/pokemons')
      .then((response) => response.json())
      .then((json) => setPokemons(json));
  }, []);

  // let random = pokemons.length + 1;

  return (
    <div className="card_card" data-id={card.id}>
      <button className="card_button" type="button" onClick={randomize}>
        pokemon
      </button>
      <div className="card_block">
        {hide === 'hidden' ? (
          <div onClick={handlerHide} className="card_image">
            <img src={card.image} alt="" />
          </div>
        ) : (
          (random &&
            pokemons.map(
              (pokemon, ind) =>
                random === ind && (
                  <div>
                    <PokemonPage key={pokemon.id} pokemon={pokemon} />
                  </div>
                )
            )) ||
          (hide === 'visible' && (
            <div onClick={handlerHide} className="card_image">
              <img src="mtgkeckmaster.gif" alt="" />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Card;
