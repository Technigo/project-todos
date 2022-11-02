/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import pokemons from 'reducers/pokemon';

const PokemonList = () => {
  const pokemonList = useSelector((store) => store.pokemons.items)
  const dispatch = useDispatch();

  const onPokemonIsCaughtToggle = (id) => {
    // what is written in the toggleItem "()" is the payload, in this case it's coming
    // from onPokemonIsCaughtToggle(singlePokemon.id) (line 26)
    dispatch(pokemons.actions.toggleItem(id))
  }
  return (
    <section>
      {pokemonList.map((singlePokemon) => {
        return (
          <article key={singlePokemon.id}>
            <h2>{singlePokemon.name}</h2>
            <label>Is this pokemon caught?
              <input
                type="checkbox"
                checked={singlePokemon.isCaught}
                onChange={() => onPokemonIsCaughtToggle(singlePokemon.id)} />
            </label>
            <button type="button">❌</button>
          </article>
        )
      })}
    </section>
  )
}

export default PokemonList;