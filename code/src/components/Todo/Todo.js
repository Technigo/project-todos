/* eslint-disable linebreak-style */
import React from 'react'
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'
import { StyledTodo, DeleteBtn } from './Todo.styles'

export const Todo = ({ task }) => {
  const dispatch = useDispatch()

  const setToComplete = (taskId) => {
    dispatch(todos.actions.checkComplete({ taskId }))
  }

  const deleteTask = (taskId) => {
    dispatch(todos.actions.deletingTask({ taskId }))
  }

  return (
    <StyledTodo className={task.complete === true ? 'finished' : 'notFinished'}>
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
      <p className={task.complete === true ? 'finished' : 'notFinished'}>{task.postedTime}</p>
      <DeleteBtn type="button" onClick={() => deleteTask(`${task.id}`)}>&#215;</DeleteBtn>
    </StyledTodo>
  )
}