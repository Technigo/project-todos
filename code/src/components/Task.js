/* eslint-disable no-shadow */
import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'

// Icon
import Icon from '../assets/delete.svg'

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
      <TaskText htmlFor={task.id}>{task.text}</TaskText>
      <Checkbutton src={Icon} height="30px" onClick={() => handleCheckboxChange({ task })} />
      <Checkbox id={task.id} type="checkbox" onChange={() => handleCheckboxChange({ task })} />
      <RemoveButton src={Icon} height="30px" onClick={() => handleRemoveTask({ task })} />
    </TaskOuterWrapper>
  )
}

export const TaskOuterWrapper = styled.div`
`;

export const Checkbox = styled.input`
`;

export const TaskText = styled.label`
`;

export const RemoveButton = styled.img`
`;
export const Checkbutton = styled.img`
`;
