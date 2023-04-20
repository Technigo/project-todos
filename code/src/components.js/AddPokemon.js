import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import pokemons from 'reducers.js/pokemon';

const capitalize = (stringToCapitalise) => {
  return stringToCapitalise.charAt(0).toUpperCase() + stringToCapitalise.slice(1);
}

const AddPokemon = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const onFormSubmit = (event) => {
    event.preventDefault();
    const newPokemon = {
      id: Date.now().toString(),
      name: capitalize(inputValue),
      isCaught: false
    };
    dispatch(pokemons.actions.addPokemon(newPokemon));
    setInputValue('');
    // so the user doesnt need to remove an earlier input
  }
  const onThrowPokeballsAwayBtnClick = () => {
    dispatch(pokemons.actions.deleteAllPokemon());
  }
  return (
    <section>
      <button type="button" onClick={onThrowPokeballsAwayBtnClick}> Throw your pokeballs away</button>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="addPokemonInput">
          Add your new Pokemon here, PokeMaster
          <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} id="addPokemonInput" type="text" />
        </label>
        <button type="submit">Add Now!</button>
      </form>
    </section>
  )
}

export default AddPokemon;