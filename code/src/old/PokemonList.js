/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import pokemons from 'reducers/pokemons'

const PokemonList = () => {
  const pokemonList = useSelector((store) => store.pokemons.items);

  const dispatch = useDispatch();

  const onIsCaughtToggle = (id) => {
    dispatch(pokemons.actions.toggleItem(id));
  }
  return (
    <section>
      {pokemonList.map((singlePokemon) => {
        return (
          <article>
            <h2>
              {singlePokemon.name}
            </h2>
            <label>
            Is it caught?
              <input type="checkbox" checked={singlePokemon.isCaught} onChange={() => onIsCaughtToggle(singlePokemon.id)} />
            </label>
            <button type="button">☑️</button>
          </article>
        )
      })}
    </section>
  )
}

export default PokemonList;

