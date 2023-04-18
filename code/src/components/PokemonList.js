import React from 'react';
import { useSelector } from 'react-redux';

const PokemonList = () => {
  const pokemonList = useSelector((store) => store.pokemons.items);
  return (
    <section>
      <ul>
        {pokemonList.map((singlePokemon) => {
          return <li key={singlePokemon.id}>{singlePokemon.name}</li>
        })}
      </ul>
    </section>
  )
}

export default PokemonList;