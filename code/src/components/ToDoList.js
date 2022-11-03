/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import pokemons from 'reducers/toDoItems';

import { OuterWrapper } from 'Styling/MainStyles';

const PokemonList = () => {
  const pokemonList = useSelector((store) => store.pokemons.items);

  const dispatch = useDispatch();

  const IsCaughtToggle = (id) => {
    dispatch(pokemons.actions.toggleItem(id))
  }

  const onDeletePokemonBtnClick = (pokemonIndex) => {
    dispatch(pokemons.actions.deleteItem(pokemonIndex));
  }

  return (
    <section>
      {pokemonList.map((singlePokemon, index) => {
        return (
          <OuterWrapper>
            <article>
              <h2>{singlePokemon.name}</h2>
              <label htmlFor="pokemon-check">Is this pokemon caught?
                <input
                  id="pokemon-check"
                  type="checkbox"
                  checked={singlePokemon.isCaught}
                  onChange={() => IsCaughtToggle(singlePokemon.id)} />
              </label>
              <button onClick={() => onDeletePokemonBtnClick(index)} type="button">X</button>
            </article>
          </OuterWrapper>
        )
      })}
    </section>
  )
}

export default PokemonList;

