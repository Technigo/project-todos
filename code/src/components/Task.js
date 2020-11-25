import React from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks' 

import styled from 'styled-components'

import Logo from './assets/delete.svg'

const TaskContainer = styled.label`
  display: flex;
  align-items: center;
  background-color: white;
  padding: 10px;
  //border-radius: 10px;
  margin: 10px 0;
  transition: 0.3s ease;
  word-break: break-word;

  &:hover {
    opacity: 0.6;
  }
`
const Checkbox = styled.input`
  width: 15px;
  height: 15px;
  margin: 0 6px 0 0;
  cursor: pointer;
`
const RemoveButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0 6px;
  margin-left: 10px;
  cursor: pointer;
`
const RemoveIcon = styled.img`
  width: 10px;
  height: 10px;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    transform: scale(1.4);
  }
`

export const Task = ({task}) => {

  const dispatch = useDispatch()

  const handleCheckboxClick = () => {
    dispatch(tasks.actions.toggleTaskCompleted(task.id))
  }

  const handleRemoveButton = () => {
    dispatch(tasks.actions.removeItem(task.id))
  }

  return (
    <TaskContainer
      htmlFor={task.id}
    >
      <Checkbox
        type="checkbox"
        id={task.id}
        checked={task.completed}
        onChange={handleCheckboxClick}
      />
      {task.text}
      <RemoveButton
        onClick={handleRemoveButton}
      >
        <RemoveIcon
          src={Logo}
          alt="delete task"
        />
      </RemoveButton>
    </TaskContainer>
  )
}