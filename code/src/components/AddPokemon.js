import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import pokemons from 'reducers/pokemon';

Object.defineProperty(String.prototype, 'capitalize', {
  value: function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },
  enumerable: false
});

const AddPokemon = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const onFormSubmit = (event) => {
    event.preventDefault();
    const newPokemon = {
      id: Date.now().toString(),
      name: inputValue.capitalize(),
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
      <button type="button" onClick={onDeleteYourPokemonBtnClick}>Delete all tasks</button>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="addPokemonInput">
        Add your new task here.
          <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} id="addPokemonInput" type="text" placeholder="Write your to do here" required />
        </label>
        <button type="submit"> Add task!</button>
      </form>
    </section>
  )
}

export default AddPokemon;