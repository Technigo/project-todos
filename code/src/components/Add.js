import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import toDoItems from 'reducers/toDoItems';

const Add = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const onFormSubmit = (event) => {
    event.preventDefault();
    const newItem = { id: Date.now().toString(),
      name: inputValue,
      isDone: false }
    dispatch(toDoItems.actions.addItem(newItem))
    setInputValue('');
  }

  return (
    <form onSubmit={onFormSubmit}>
      <input id="add" type="text" placeholder="Add to do" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
      <button type="submit">Add item</button>
    </form>
  )
}

export default Add;