import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import DeleteIcon from '@material-ui/icons/Delete'

import { useDispatch } from 'react-redux'

import todos from '../reducers/todos'

const TodoItem = ({ checked, id, text }) => {
  const dispatch = useDispatch()

/*   const handleDelete = (id) => {
    const data = localStorage.getItem('todos')
      ? JSON.parse(localStorage.getItem('todos'))
      : []
      localStorage.setItem('todos', JSON.stringify([...data, {
        description: newTodo,
        isComplete: false, 
        id: Date.now()
      } ])) 
    dispatch(todos.actions.removeTodo(id))
  } */

  return (
    <div className='todo-item'>
      <Checkbox
        checked={checked}
        className="checked"
        onChange={() => dispatch(todos.actions.toggleComplete(id))}
      />
      <p className={checked ? 'done' : null}>{text}</p>
      <div className='delete-btn'>
        <DeleteIcon onClick={() => dispatch(todos.actions.removeTodo(id))}/>
      </div>
    </div>
  )
}

export default TodoItem