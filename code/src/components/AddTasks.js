import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { Wrapper } from 'styles/GlobalStyles';
import { tasks } from 'reducers/tasks';
import plusSmall from 'assets/plus_50.png';

export const AddTasks = () => {
  //
  const [newTask, setNewTask] = useState(false);
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  // Function for adding task to the store
  const sendTaskToStore = (item) => {
    dispatch(tasks.actions.addToDo(item))
    setMessage('')
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    // When nesTask is false, display a + to enter a new task
    // When + is clicked, display a text input field for new task
    <AddTaskWrapper>
      {!newTask && (
        <button
          type="button"
          onClick={() => setNewTask(true)}>
          <AddImage src={plusSmall} alt="" />
        </button>
      )}
      {newTask && (
        <InputWrapper>
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
        </InputWrapper>
      )}
    </AddTaskWrapper>
  )
}

const AddTaskWrapper = styled(Wrapper)`
  min-height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`

const InputWrapper = styled(AddTaskWrapper)`
  background-color: rgba(60, 60, 60, 0.2);
  width: 100%;
  height: 100%;
  padding: 0;
  border-radius: 45px;
  border: none;
  position: absolute;
`

const AddImage = styled.img`
  background-color: transparent; 
  border: white;
  cursor: pointer;
`
// PLus image: background-color: transparent; border: transparent;
// <a target="_blank" href="https://icons8.com/icon/8J4QMUHe5rvn/plus">Plus</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>