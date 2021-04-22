import React from 'react'
import { useDispatch } from 'react-redux'

import todos from '../reducers/todos'

const TodoItem = (todo) => {
  const dispatch = useDispatch()

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.isComplete}
        onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
        className="checkbox"
      />
      <p className="todo-text">{todo.description}</p>
      <button
        onClick={() => dispatch(todos.actions.removeTodo(todo.id))}
        className="delete-button"
      >
        delete
      </button>
    </div>
  )
}

export default TodoItem
