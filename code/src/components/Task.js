import React from 'react'
import { useDispatch } from 'react-redux'

import { tasklist } from '../reducers/tasklist'
import { Checkbox } from './Checkbox'
import { TaskContainer, TaskText, Button } from './styled/tasks'

export const Task = ({ id, text, complete }) => {
  const dispatch = useDispatch()

  const handleCheckToggle = () => {
    dispatch(tasklist.actions.toggleCheck(id))
  }

  const handleRemove = () => {
    dispatch(tasklist.actions.removeTodo(id)) 
    { text }
  }

  return (
    <>
      <TaskContainer>
          <Checkbox 
            isChecked={complete}
            onChangeHandler={handleCheckToggle}
          />
          <TaskText>{text}</TaskText>
        <Button onClick={handleRemove}><span role='img' aria-label='Delete'>🗑️</span></Button>
      </TaskContainer>
    </>
  )
}