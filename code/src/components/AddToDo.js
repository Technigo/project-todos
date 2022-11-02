import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import todos from 'reducers/todos';

const AddToDo = () => {
  const [input, setInput] = useState('');

  const dispatch = useDispatch();

  const onAddToDo = (event) => {
    event.preventDefault();
    if (input !== '') {
      dispatch(todos.actions.addToDo(input))
      setInput('')
    } else {
      alert('You have to write a To Do before adding');
    }
  };
  const onInputChange = (event) => {
    setInput(event.target.value)
  };
  return (
    <form onSubmit={onAddToDo}>
      <input
        type="text"
        value={input}
        onChange={onInputChange}
        placeholder="Write new task" />
      <button type="submit">Test</button>
    </form>
  )
}

export default AddToDo