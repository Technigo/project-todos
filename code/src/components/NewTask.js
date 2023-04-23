import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Task } from 'reducers/Task';
import './NewTask.css';

// modern React components are functions
export const NewTask = () => {
  const [inputValue, setInputValue] = useState(''); /* initial value empty string  */
  const dispatch = useDispatch();
  const onAddNewTaskSubmit = (event) => {
    // first prevent default otherwise page will reload
    event.preventDefault();
    // create an object that will be sent to state whe  user does something
    const TaskAdded = {
      id: Date.now.toString(), /* www.random.org */
      content: inputValue, /* value that user puts in form */
      isChecked: false
    };
    // when user submits form, reducer is listening and sends playload to create new state
    dispatch(Task.actions.addNewTask(TaskAdded));
    // when action is dipatched, we clear form so user can do it again
    setInputValue('');
  }

  return (
    <section className="NewTaskSection">
      <h1> Plantastic Day! </h1>
      <h2> To Do </h2>
      <form className="NewTaskForm" onSubmit={onAddNewTaskSubmit}>
        <label htmlFor="NewTaskInput">
          <input
            id="NewTaskInput"
            value={inputValue} /* needs to change based on user input/reset function defined up */
            onChange={(event) => setInputValue(event.target.value)} /* needed to read input */
            type="text" />
        </label>
        <button
          type="submit"
          className="newTaskButton">
          ➕
        </button>
      </form>

    </section>
  );
}