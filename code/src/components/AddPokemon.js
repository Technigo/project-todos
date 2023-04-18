import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import pokemons from 'reducers/pokemon';

const AddPokemon = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    // this prevents the form from reloading
    const newPokemon = {
      id: Date.now().toString(),
      name: inputValue.charAt(0).toUpperCase() + inputValue.slice(1),
      isCaught: false
    }
    dispatch(pokemons.actions.addPokemon(newPokemon));
    setInputValue('');
  }
  return (
    <section>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="addPokemonInput">
            Add your new Pokemon here, PokeMaster
          <input
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            id="addPokemonInput"
            type="text" />
        </label>
        <button type="submit">Add Pokémon!</button>
      </form>
    </section>
  )
}

export default AddPokemon;