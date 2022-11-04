/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid'; // installed with npm install uuidv4
import tasks from 'reducers/tasks';
import styled from 'styled-components/macro'

const TaskInput = () => {
  const [newTask, setNewTask] = useState('');
  const uniqueID = uuid(); // provides a unique ID for every task
  const dispatch = useDispatch();
  const buttonDisabled = newTask.length < 2 || newTask.length > 140

  const OnFormSubmit = (event) => {
    event.preventDefault();
    dispatch(tasks.actions.addTask({
      id: uniqueID, // could do id: Date.now().toString()
      text: newTask,
      isComplete: false
    }));
    setNewTask('');

  /*  event.preventDefault()
      const newTodo = {
        id: Date.now().toString(),
        text: newTask,
        isComplete: false
      dispatch(tasks.actions.addTask(newTodo))
      setNewTask('')
} */
  }
  const handleNewTaskChange = (event) => {
    setNewTask(event.target.value)
  };

  return (
    <section>
      <form onSubmit={OnFormSubmit}>
        <label>
          <StyledTextarea
            value={newTask}
            placeholder="Add your task here"
            onChange={handleNewTaskChange} />
        </label>
        <StyledSubmitButton type="submit" disabled={buttonDisabled}>
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 122.88 122.75"><title>plus</title><path d="M44.63,0H78.25a4,4,0,0,1,4,4V40.57h36.64a4,4,0,0,1,4,4V78.18a4,4,0,0,1-4,4H82.24v36.58a4,4,0,0,1-4,4H44.63a4,4,0,0,1-4-4V82.18H4a4,4,0,0,1-4-4V44.56a4,4,0,0,1,4-4H40.63V4a4,4,0,0,1,4-4Z" />
          </svg>
        </StyledSubmitButton>
      </form>
    </section>
  )
}

export default TaskInput

const StyledTextarea = styled.textarea`
 background-color: var(--color-grey);
 box-sizing: border-box;
 border-radius: 20px;
 border: 2px solid white;
 width: 55vw;
 resize: none;
 font-family: "Source Sans Pro";
 /* font-weight: bold; */
 color: var(--color-darkGrey);
 padding-top: 1em;
 padding-left: 1em;
 outline: none;

@media (min-width: 667px) and (max-width: 1024px)  {
width: 45vw;
}
@media screen and (min-width: 1024px) {
width: 22vw;
}
 `
const StyledSubmitButton = styled.button`
border: none;
width: 3em;
height: 3em;
cursor:pointer;
border-radius: 10px;
margin-top: 8px;
background: transparent;
`