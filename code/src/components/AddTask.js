import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';
import { Button } from './Button';

export const AddTask = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTask = {
      id: Date.now().toString(),
      text: inputValue.charAt(0).toUpperCase() + inputValue.slice(1),
      isDone: false
    };

    dispatch(tasks.actions.addTask(newTask));
    // dispatching the addPokemon with the newPokemon as the argument
    setInputValue('');
    // We have to reset the input value back to empty
    // https://www.random.org/
  }

  const clearTasks = () => {
    dispatch(tasks.actions.clearTasks());
  }

  return (
    <section>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="addTaskInput">
            Add Your task here!
          <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} id="addTaskInput" type="text" />
        </label>
        <button type="submit"> Add Now!</button>
      </form>
      <Button type="button" onClick={clearTasks}>Clear all</Button>
    </section>
  )
}
