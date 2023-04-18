import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import todos from 'redux/reducers/todos';

const AddToDo = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const onFormSubmit = (event) => {
    event.preventDefault();
    const newToDo = {
      id: Date.now().toString(),
      name: inputValue.charAt(0).toUpperCase() + inputValue.slice(1),
      isNew: false
    };
    dispatch(todos.actions.addToDo(newToDo));
    setInputValue('');
    // https://www.random.org
  }
  return (
    <section>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="addToDoTaskInput">
          Add Your new To Do task here!
          <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} id="addToDoInput" type="text" />
        </label>
        <button type="submit"> Add new To Do now</button>
      </form>
    </section>
  )
}

export default AddToDo;