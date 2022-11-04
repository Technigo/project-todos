/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import pokemons from 'reducers/pokemon';

const AddPokemon = () => {
// Difference between .map and for loop
// Usual task for this question
// = implement map functionality with prototype
/* function newMap (callbackFunction) {
    for (let index = 0; index < array.length; index++) {
      callbackFunction
    } array
} */

  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const onFormSubmit = (event) => {
    event.preventDefault();
    const newPokemon = { id: Date.now().toString(),
      name: inputValue,
      isCaught: false }
    dispatch(pokemons.actions.addItem(newPokemon));
    setInputValue('');
  }

  return (
    <form onSubmit={onFormSubmit}>
      <label>
            New Pokemon:
        <input type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
      </label>
      <button type="submit">Add pokemon</button>
    </form>
  )
}

export default AddPokemon;