/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import pokemons from 'reducers/pokemon';

const PokemonList = () => {
  const pokemonList = useSelector((store) => store.pokemons.items);

  const dispatch = useDispatch();

  const onPokemonIsCaughtToggle = (id) => {
    dispatch(pokemons.actions.toggleItem(id))
  }
  return (
    <section>
      {pokemonList.map((singlePokemon) => {
        return (
          <article>
            <h2>{singlePokemon.name}</h2>
            <label htmlFor="pokemon-check">Is this pokemon caught?
              <input
                id="pokemon-check"
                type="checkbox"
                checked={singlePokemon.isCaught}
                onChange={() => onPokemonIsCaughtToggle(singlePokemon.id)} />
            </label>
            <button type="button">X</button>
          </article>
        )
      })}
    </section>
  )
}

export default PokemonList;

