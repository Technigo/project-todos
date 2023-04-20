import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import todos from 'reducers.js/todos';

const capitalize = (stringToCapitalise) => {
  return stringToCapitalise.charAt(0).toUpperCase() + stringToCapitalise.slice(1);
}

const AddToDo = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const onFormSubmit = (event) => {
    event.preventDefault();
    const newToDo = {
      id: Date.now().toString(),
      name: capitalize(inputValue),
      isDone: false
    };
    dispatch(todos.actions.addToDo(newToDo));
    setInputValue('');
    // so the user doesnt need to remove the earlier input
  }
  const onThrowToDoAwayBtnClick = () => {
    dispatch(todos.actions.deleteAllToDo());
  }
  return (
    <section>
      <button type="button" onClick={onThrowToDoAwayBtnClick}> Finish this list</button>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="addToDoInput">
        Time to add a new task to the list and get things done
          <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} id="addToDoInput" type="text" />
        </label>
        <button type="submit">Add Now</button>
      </form>
    </section>
  )
}

export default AddToDo;