/* eslint-disable no-shadow */
import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'

// Icon
/* import Icon from '../assets/delete.svg' */

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
        {/* <RemoveButton src={Icon} height="30px" onClick={() => handleRemoveTask({ task })} /> */}
        <ButtonStyle onClick={() => handleRemoveTask({ task })}>+</ButtonStyle>
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
`;

export const Checkbox = styled.input`
  -webkit-appearance: none;
  appearance: none;
  /* For iOS < 15 to remove gradient background */
  background-color: #fff;
  /* Not removed via appearance */
  margin: 0;
  font: inherit;
  color: currentColor;
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid currentColor;
  border-radius: 0.15em;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;

::before {
  content: "";
  width: 0.65em;
  height: 0.65em;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em var(--form-control-color);

}
  .form-control + .form-control {
  margin-top: 1em;
}

:checked::before {
transform-origin: bottom left;
  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
}

cursor: pointer;
`;

export const TaskText = styled.label`
`;
export const ButtonsWrapper = styled.div`
display: flex;
align-items: flex-start;
`;

export const ButtonStyle = styled.button`
transform: rotate(-45deg);
font-size: 18px;
border-radius: 25px;
border: none;
outline: none;
cursor: pointer;
`;

export const CheckButtonEmoIcon = styled.button`
font-size: 30px;
`;

export const RemoveButton = styled.img`
`;
export const Checkbutton = styled.img`
`;

