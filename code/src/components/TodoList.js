import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import todos from '../reducers/todos'

const TodoList = () => {
  const items = useSelector((store) => store.todos.items)
  
	const dispatch = useDispatch()

  return (
    <div className="todo-container">
      {items.map(todo => (
        <div className="todos" key= {todo.id}>
          <p>{todo.description}</p>
          <div className="todo-input">
            <input
              type="checkbox"
              checked={todo.isComplete}
              onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
            />
            <button 
              className="delete-btn" 
              onClick={() => dispatch(todos.actions.removeTodo(todo.id))}
              >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  ) 
}

export default TodoList