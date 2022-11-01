import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Wrapper } from 'styles/GlobalStyles';
import { tasks } from 'reducers/tasks';

export const AddTasks = () => {
  //
  const [newTask, setNewTask] = useState(false);
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  // Function for adding task to the store
  const sendTaskToStore = (item) => {
    dispatch(tasks.actions.addToDo(item))
    setMessage('')
    // setNewTask(false)
    console.log('MESSAGE:', message)
  }

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    // When nesTask is false, display a + to enter a new task
    // When + is clicked, display a text input field for new task
    <Wrapper>
      {!newTask && (
        <button
          type="button"
          onClick={() => setNewTask(true)}>
          ➕
        </button>
      )}
      {newTask && (
        <>
          <input
            type="text"
            onChange={handleChange}
            value={message} />
          <button
            type="button"
            onClick={() => sendTaskToStore(message)}>
            Add task
          </button>
          <button
            type="button"
            onClick={() => setNewTask(false)}>
            X
          </button>
        </>
      )}
    </Wrapper>
  )
}