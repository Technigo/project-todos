import React from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks' 

import styled from 'styled-components'

const TaskContainer = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
`
const Checkbox = styled.input`
  width: 15px;
  height: 15px;
  cursor: pointer;
`
const TaskText = styled.label`
  font-size: 16px;
  cursor: pointer;

  &:hover {
    color: red;
  }
`
const RemoveButton = styled.button`
  background-color: orange;
  margin-left: 10px;
  cursor: pointer;
`

const RemoveIcon = styled.img`
  width: 15px;
  height: 15px;
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
    <TaskContainer>
      <Checkbox
        type="checkbox"
        id={task.id}
        checked={task.completed}
        onChange={handleCheckboxClick}
      />
      <TaskText
        className="task-text"
        htmlFor={task.id}
      >
        {task.text}
        <span>
          ({task.category})
        </span>
      </TaskText>
      <RemoveButton
        onClick={handleRemoveButton}
      >
        <RemoveIcon
          src="https://www.flaticon.com/svg/static/icons/svg/1342/1342016.svg"
        />
      </RemoveButton>
    </TaskContainer>
  )
}