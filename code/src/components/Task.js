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
`
const TaskText = styled.label`
  font-size: 16px;
`
const RemoveButton = styled.button`
  background-color: orange;
  margin-left: 10px;
`

export const Task = ({task}) => {

  const dispatch = useDispatch()

  const handleCheckboxClick = () => {
    dispatch(tasks.actions.toggleTaskCompleted(task.id))
  }

  const handleRemoveButton = () => {
  }

  return (
    <TaskContainer>
      <Checkbox
        type="checkbox"
        checked={task.completed}
        onChange={handleCheckboxClick}
      />
      <TaskText
        className="task-text"
      >
        {task.text}
        <span>
          ({task.category})
        </span>
      </TaskText>
      <RemoveButton
        onClick={handleRemoveButton}
      >
        Remove
      </RemoveButton>
    </TaskContainer>
  )
}