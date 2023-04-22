import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import pokemons from 'reducers/pokemon';

const AddPokemon = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const onFormSubmit = (event) => {
    event.preventDefault();
    const newPokemon = {
      id: Date.now().toString(),
      name: inputValue.toUpperCase(),
      isCaught: false
    }
    // false. so that it is not checked.
    dispatch(pokemons.actions.addPokemon(newPokemon));
    setInputValue('');
  }
  const onDeleteYourPokemonBtnClick = () => {
    dispatch(pokemons.actions.deleteAllPokemon());
  }

  return (
    <section>
      <button type="button" onClick={onDeleteYourPokemonBtnClick}>DELETE YOUR Pokemons</button>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="addPokemonInput">
        Add your new Pokemon here.
          <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} id="addPokemonInput" type="text" />
        </label>
        <button type="submit"> Add now!</button>
      </form>
    </section>
  )
}

export default AddPokemon;