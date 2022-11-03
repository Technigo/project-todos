/* eslint-disable linebreak-style */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import pokemons from 'reducers/Pokemon';

const PokemonList = () => {
  const pokemonList = useSelector((store) => store.pokemons.items);

  const dispatch = useDispatch();

  const onIsCaughtToggle = () => {
    dispatch(pokemons.actions.toggleItem('testing toggle'));
  }

  return (
    <section>
      {pokemonList.map((singlePokemon) => {
        return (
          <article>
            <h2>{singlePokemon.name}</h2>
            <lable>Is this pokemon caught?
              <input
                type="checkbox"
                checked={singlePokemon.isCaught}
                onChange={() => onIsCaughtToggle(singlePokemon.id)} />
            </lable>
            <button type="button">🐯</button>
          </article>
        );
      })}
    </section>
  )
}

export default PokemonList;