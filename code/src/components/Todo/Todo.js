/* eslint-disable linebreak-style */
import React from 'react'
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'
import trashbin from '../../assets/trashbin.svg'
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
      <div id="checkText" className={task.complete === true ? 'finished' : 'notFinished'}>
        <input
          name={task.text}
          type="checkbox"
          checked={task.complete}
          onChange={() => setToComplete(task.id)} />
        <label htmlFor={task.text}>{task.text}</label>
        <div className="dateTime">
          <p>Created: {task.postedTime}</p>
          <p>Due: {task.dueDate}</p>
        </div>
      </div>

      <DeleteBtn type="button" onClick={() => deleteTask(`${task.id}`)}><img src={trashbin} alt="delete" /></DeleteBtn>
    </StyledTodo>
  )
}