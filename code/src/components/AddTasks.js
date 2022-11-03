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
    <>
      {!newTask && (
        <AddTaskWrapper>
          <AddBtn
            type="button"
            onClick={() => setNewTask(true)}>
            <img src={plusSign} alt="" />
          </AddBtn>
        </AddTaskWrapper>
      )}
      {newTask && (
        <FormWrapper>
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
        </FormWrapper>
      )}
    </>
  )
}

// STYLING FOR ABOVE COMPONENT
const AddTaskWrapper = styled(Wrapper)`
  justify-content: center;
`

const FormWrapper = styled(AddTaskWrapper)`
  position: relative;  
  text-align: center;
  background-color: rgba(60, 60, 60, 0.1);
  width: 95%;
  height: 100%;
  border: none;
  border-radius: 0.6rem;
  padding: 2rem 1.5rem 1.3rem 1.5rem;
  margin: 1.5rem 0.5rem;
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
  cursor: pointer;
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
  width: 90%;
  padding: 1.2rem;
`