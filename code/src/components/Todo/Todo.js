/* eslint-disable linebreak-style */
import { DeleteBtn } from 'Globalstyles'
import React from 'react'
import { useDispatch } from 'react-redux'
import todos from 'reducers/todos'
import { StyledCheckbox } from './Todo.styles'

export const Todo = ({ task }) => {
  const dispatch = useDispatch()

  const setToComplete = (taskId) => {
    dispatch(todos.actions.checkComplete({ taskId }))
  }

  return (
    <StyledCheckbox className={task.complete === true ? 'finished' : 'notFinished'}>
      <input
        name={task.text}
        type="checkbox"
        checked={task.complete}
        className={task.complete === true ? 'finished' : 'notFinished'}
        onChange={() => setToComplete(task.id)} />
      <label
        htmlFor={task.text}
        className={task.complete === true ? 'finished' : 'notFinished'}>{task.text}
      </label>
      <DeleteBtn type="button">&#215;</DeleteBtn>
    </StyledCheckbox>
  )
}