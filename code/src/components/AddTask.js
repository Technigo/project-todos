import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import { Counter } from 'components/Counter';

/* const TaskText = styled.p`
    font-family: 'Dongle', sans-serif;
    font-size: 2em;
    line-height: 0.5em;
    width: 100%;
`
const Time = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 0.7em;
  width: 100%;
` */

const capitalize = (stringToCapitalise) => {
  return stringToCapitalise.charAt(0).toUpperCase() + stringToCapitalise.slice(1);
}
const AddTask = () => {
  const [inputValue, setInputValue] = useState(''); // useState använder vi för att det ska uppdateras

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    // för att sidan inte ska reload efter input event.PreventDefault måste in
    event.preventDefault();

    // in newTask im creating a new id, name
    const newTask = {
      id: Date.now().toString(), // Date.now takes the todays date and makes it into a string
      taskName: capitalize(inputValue), // byta plats på dessa för att capitalizefunction ska funka.
      isChecked: false // använder sen när jag har checkboxes. I wanna
    };
    dispatch(tasks.actions.addTask(newTask)); // newtask is the payload.
    setInputValue('');
  };

  const onResetToDoClick = () => {
    dispatch(tasks.actions.deleteAllTasks());
  };

  return (
    <div className="container">
      <section>
        <div className="input">
          <p>Plans for today</p>
          <form onSubmit={onFormSubmit}>
            <label htmlFor="addTaskInput">
              <button type="submit"> Add</button>
              {/* Here user writes the dotos - input */}
              <input
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                id="addTaskInput"
                type="text" />
            </label>
            {/* <TaskText>{singleTask.text}</TaskText>
            <Time>{singleTask.time}</Time> */}
          </form>
        </div>
        <Counter />
        <button
          className="resetButton"
          type="button"
          onClick={onResetToDoClick}> <div title="❂ Reset your tasklist ❂">⤫</div>
        </button>
      </section>
    </div>
  );
};

export default AddTask;