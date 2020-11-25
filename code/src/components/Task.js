import React from 'react'
import { useDispatch } from 'react-redux'

import { tasklist } from '../reducers/tasklist'
import { Checkbox } from './Checkbox'
import { TaskContainer } from './styled/tasks'

export const Task = ({ id, text, complete }) => {
  const dispatch = useDispatch()

  const handleCheckToggle = () => {
    dispatch(tasklist.actions.toggleCheck(id))
  }

  const handleRemove = () => {
    dispatch(tasklist.actions.removeTodo(id))
  }

  return (
    <>
      <TaskContainer>
          <Checkbox 
            isChecked={complete}
            onChangeHandler={handleCheckToggle}
          />
          <p>{text}</p>
        <button onClick={handleRemove}>X</button>
      </TaskContainer>
    </>
  )
}