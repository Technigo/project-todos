import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import pokemons from 'reducers/toDoItems';

const Add = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const onFormSubmit = (event) => {
    event.preventDefault();
    const newItem = { id: Date.now().toString(),
      name: inputValue,
      isCaught: false }
    dispatch(pokemons.actions.addItem(newItem))
    setInputValue('');
  }

  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor="add">
        New Pokemon:
        <input id="add" type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
      </label>
      <button type="submit">Add item</button>
    </form>
  )
}

export default Add;