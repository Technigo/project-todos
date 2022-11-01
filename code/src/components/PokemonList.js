import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import pokemons from 'reducers/pokemon';

const PokemonList = () => {
  const pokemonList = useSelector((store) => store.pokemons.items);

  const dispatch = useDispatch();

  // payload
  const onIsCaughtToggle = (id) => {
    dispatch(pokemons.actions.toggleItem(id))
  }
  return (
    <section>
      {pokemonList.map((singlePokemon) => {
        return (
          <article>
            <h2>{singlePokemon.name}</h2>
            <lable>Is this pokemon caught
              <input
                type="checkbox"
                checked={singlePokemon.isCaught}
                onChange={() => onIsCaughtToggle(singlePokemon.id)} />
            </lable>
            <button type="button">X</button>
          </article>
        );
      })}
    </section>
  )
}

export default PokemonList;