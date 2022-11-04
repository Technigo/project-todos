/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import pokemons from 'reducers/pokemon';

const PokemonList = () => {
  const pokemonList = useSelector((backpack) => backpack.pokemons.items);

  const dispatch = useDispatch();

  const onIsCaughtToggle = (id) => {
    dispatch(pokemons.actions.toggleItem(id));
  }
  const onDeletePokemonBtnClick = (pokemonIndex) => {
    dispatch(pokemons.actions.deleteItem(pokemonIndex));
  }
  return (
    <section>
      {pokemonList.map((singlePokemon, index) => {
        return (
          <article key={singlePokemon.id}>
            <h2>{singlePokemon.name}</h2>
            <label>Is this pokemon caught
              <input type="checkbox" checked={singlePokemon.isCaught} onChange={() => onIsCaughtToggle(singlePokemon.id)} />
              <button onClick={() => onDeletePokemonBtnClick(index)} type="button">X</button>
            </label>
          </article>

        );
      })}
    </section>
  )
}

export default PokemonList;