/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid'; // installed with npm install uuidv4
import tasks from 'reducers/tasks';

const TaskInput = () => {
  const [newTask, setNewTask] = useState('');
  const uniqueID = uuid(); // provides a unique ID for every task

  const dispatch = useDispatch();

  const handleOnFormSubmit = (event) => {
    event.preventDefault();
    dispatch(tasks.actions.addTask({
      id: uniqueID,
      text: newTask,
      isComplete: false
    }));
    setNewTask('');
  }
  const handleNewTaskChange = (event) => {
    setNewTask(event.target.value)
  };

  /*   const handleRemoveButton = (tasks) => {
    dispatch(tasks.actions.removeTask)
  } */

  return (
    <section>
      <form onSubmit={handleOnFormSubmit}>
        <label>
          <textarea
            value={newTask}
            placeholder="Write your task here"
            onChange={handleNewTaskChange} />
        </label>
        <button type="submit">+</button>
      </form>
    </section>
  )
}

export default TaskInput