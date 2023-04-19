import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';

const AddTask = () => {
  const [inputValue, setInputValue] = useState(''); // useState använder vi för att det ska uppdateras
  const dispatch = useDispatch();
  const onFormSubmit = (event) => {
    // för att sidan inte ska reload efter input event.PreventDefault måste in
    event.preventDefault();
    const newTask = {
      id: Date.now().toString(),
      name: inputValue.toUpperCase(),
      isCaught: false
    };
    dispatch(tasks.actions.addTask(newTask));
    setInputValue('');
    // https://www.random.org/
  }
  return (
    <section>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="addTaskInput">
          <p>To-Do To-Day?</p>
          <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} id="addTaskInput" type="text" />
        </label>
        <button type="submit"> Add Task!</button>
      </form>
    </section>
  )
}

export default AddTask;