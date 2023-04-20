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
      name: inputValue.toLowerCase(),
      isCaught: false
    };
    dispatch(tasks.actions.addTask(newTask));
    setInputValue('');
    // https://www.random.org/
  }
  return (
    <section>
      <p>Plans for today:</p>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="addTaskInput">
          <button type="submit"> Add</button>
          {/* Here user writes the dotos - input */}
          <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} id="addTaskInput" type="text" />
        </label>
      </form>
    </section>
  )
}

export default AddTask;