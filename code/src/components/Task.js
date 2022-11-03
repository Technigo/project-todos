/* eslint-disable no-shadow */
import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'

// Reducers
import { tasks } from '../reducers/tasks'

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  // To remove an item in the TaskList
  const handleRemoveTask = ({ task }) => {
    dispatch(tasks.actions.removeTask(task.id));
  }

  // To show if checkbox is checked or not
  const handleCheckboxChange = ({ task }) => {
    dispatch(tasks.actions.toggleCompleteStatus(task.id));
  }
  return (
    <TaskOuterWrapper>
      <TaskTextWrapper>
        <TaskText htmlFor={task.id}>{task.text}</TaskText>
      </TaskTextWrapper>
      <ButtonsWrapper>
        <Checkbox id={task.id} type="checkbox" onChange={() => handleCheckboxChange({ task })} />
        <ButtonStyle onClick={() => handleRemoveTask({ task })}>✕</ButtonStyle>
      </ButtonsWrapper>
    </TaskOuterWrapper>
  )
}

export const TaskOuterWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`;

export const TaskTextWrapper = styled.div`
padding-top: 7px;
`;

//  This section is the styling for a custom checkbox
export const Checkbox = styled.input`
  -webkit-appearance: none;
  appearance: none;
  /* For iOS < 15 to remove gradient background */
  background-color: #fff;
  /* Not removed via appearance */
  appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  color: grey;
  width: 1.30em;
  height: 1.30em;
  border: 0.15em solid currentColor;
  border-radius: 25px;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;

.form-control + .form-control {
  margin-top: 1em;
}

&:hover {
  cursor: pointer;
  color: black;
}

::before {
  content: "";
  width: 0.65em;
  height: 0.65em;
  border-radius: 25px;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em black;
  transform-origin: bottom left;
  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
}

:checked::before {
  transform: scale(1);
}
`;

export const TaskText = styled.label`
font-family: 'Roboto', sans-serif;
`;

export const ButtonsWrapper = styled.div`
display: flex;
align-items: flex-start;
margin: 8px 0;
`;

export const ButtonStyle = styled.button`
height: 1.0em;
width: 1.0em;
font-size: 24px;
color: grey;
background-color: white;
border: none;
border-radius: 25px;
outline: none;
padding:0;
margin: -5px 0 0 0;
cursor: pointer;

&:hover {
  cursor: pointer;
  background: white;
  color: black;
}
`;

