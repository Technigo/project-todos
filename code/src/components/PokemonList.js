/*eslint-disable*/
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import pokemons from 'reducers/pokemon';

const PokemonList = () => {
  const pokemonList = useSelector((store) => store.pokemons.items)
  const dispatch = useDispatch();

  const onDeleteSinglePokemonBtnClick = (id) => {
    dispatch(pokemons.actions.deleteSinglePokemon(id));
  }
  const onIsCaughtCheckboxToggle = (id) => {
    dispatch(pokemons.actions.toggleIfPokemonIsCaught(id));
  }
  return (
    <section>
      <ul>
        {pokemonList.map((singlePokemon) => {
          return (
            <li key={singlePokemon.id}>
              <p>
                <span>{singlePokemon.name}</span>
                <button
                  type="button"
                  onClick={() => onDeleteSinglePokemonBtnClick(singlePokemon.id)}>
                      Delete this Pokemon
                </button>
                <label htmlFor={`pokemon_with_id${singlePokemon.id}`}>
                    Is this one done?
                  <input id={`pokemon_with_id${singlePokemon.id}`} type="checkbox" value={singlePokemon.isCaught} onChange={() =>
                    onIsCaughtCheckboxToggle(singlePokemon.id)} /></label>
              </p>
            </li>)
        })}
      </ul>
    </section>
  )
}

export default PokemonList;