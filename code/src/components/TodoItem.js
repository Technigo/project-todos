import React from 'react'
import { useDispatch } from 'react-redux'

import todos from '../reducers/todos'

const TodoItem = (todo) => {
  const dispatch = useDispatch()

  return (
    <div className="todo-item">
      <p>{todo.description}</p>
      <input
        type="checkbox"
        checked={todo.isComplete}
        onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
      />
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
