import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import '../style/AddTask.css'
import '../style/Input.css'
import '../style/Buttons.css'

const AddTask = () => {
  const [inputValue, setInputValue] = useState(''); // useState använder vi för att det ska uppdateras

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    // för att sidan inte ska reload efter input event.PreventDefault måste in
    event.preventDefault();

    // in newTask im creating a new id, name
    const newTask = {
      id: Date.now().toString(), // Date.now takes the todays date and makes it into a string
      taskName: inputValue.toUpperCase(),
      isChecked: false // använder sen när jag har checkboxes. I wanna
    };
    dispatch(tasks.actions.addTask(newTask)); // newtask is the payload.
    setInputValue('');
  }
  return (
    <section>
      <div className="input">
        <form onSubmit={onFormSubmit}>
          <label htmlFor="addTaskInput">
            To-Do To-Day?
            <input
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              id="addTaskInput"
              type="text" />
          </label>
          <button
            type="submit"> Add Task!
          </button>
        </form>
      </div>
    </section>
  )
};

export default AddTask;