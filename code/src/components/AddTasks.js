import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { Wrapper, Actionbtn } from 'styles/GlobalStyles';
import { tasks } from 'reducers/tasks';
import plusSign from 'assets/plusGreen.png';

export const AddTasks = () => {
  const [newTask, setNewTask] = useState(false);
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  // Prevent form from refreshing whole page when submitted
  const onFormSubmit = (event) => {
    event.preventDefault()
  };

  // Function for adding task to the store
  const sendTaskToStore = (item) => {
    if (item.length > 0) {
      dispatch(tasks.actions.addToDo(item))
    }
    setMessage('')
  };

  // Function for storing user's text
  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    // When no task is being added, display a plus sign for entering a new task
    // When the plus sign is clicked, display a text input field for new task
    <AddTaskWrapper>
      {!newTask && (
        <AddBtn
          type="button"
          onClick={() => setNewTask(true)}>
          <img src={plusSign} alt="" />
        </AddBtn>
      )}
      {newTask && (
        <InputWrapper>
          <Closebtn
            type="button"
            onClick={() => setNewTask(false)}>
            <Cross>X</Cross>
          </Closebtn>
          <form onSubmit={onFormSubmit}>
            <EnterToDo
              type="text"
              onChange={handleChange}
              value={message} />
            <Actionbtn
              align="flex-start"
              color="#1F9D6E"
              type="submit"
              onClick={() => sendTaskToStore(message)}>
            Add task
            </Actionbtn>
          </form>
        </InputWrapper>
      )}
    </AddTaskWrapper>
  )
}

// STYLING FOR ABOVE COMPONENT
const AddTaskWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 2rem 0;
`

const InputWrapper = styled(AddTaskWrapper)`
  background-color: rgba(60, 60, 60, 0.1);
  width: 100%;
  height: 100%;
  border: none;
  position: absolute;
  border-radius: 0.6rem;
  padding: 5rem 1.5rem;
`

const AddBtn = styled.button`
 border: transparent;
 background-color: transparent;
 cursor: pointer;
`

const Closebtn = styled.button`
  align-self: flex-end;
  border: transparent;
  background-color: transparent;
  position: absolute;
  right: 3%;
  top: 5%;
  color: gray;
`

const Cross = styled.span`
  color: gray;
  font-weight: bold;
  font-size: 20px;
`

const EnterToDo = styled.input`
  align-self: flex-start;
  margin: 1rem 0;
  border: none;
  border-radius: 4px;
  color: #566b78;
  font-size: 1rem;
  font-weight: 200;
  height: 3.2rem;
  background: whitesmoke;
  width: 85%;
  padding: 1.2rem;
`
// <a target="_blank" href="https://icons8.com/icon/8J4QMUHe5rvn/plus">Plus</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>