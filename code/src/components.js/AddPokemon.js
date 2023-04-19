import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import pokemons from 'reducers.js/pokemon';

const AddPokemon = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const onFormSubmit = (event) => {
    event.preventDefault();
    const newPokemon = {
      id: Date.now().toString(),
      name: inputValue.toUpperCase(),
      isCaught: false
    };
    dispatch(pokemons.actions.addPokemon(newPokemon));
    setInputValue('');
  }
  return (
    <section>
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