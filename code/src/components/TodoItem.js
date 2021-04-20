import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';

import { useDispatch } from 'react-redux'

import todos from '../reducers/todos'

const TodoItem = ({ checked, id, text }) => {
  const dispatch = useDispatch()

  return (
    <div className='todo-item'>
      <Checkbox
        checked={checked}
        className="checked"
        onChange={() => dispatch(todos.actions.toggleComplete(id))}
      />
      <p>{text}</p>
      <div className="delete-btn">
        <DeleteIcon onClick={() => dispatch(todos.actions.removeTodo(id))}/>
      </div>
    </div>
  )
}

export default TodoItem