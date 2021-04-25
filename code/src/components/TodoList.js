import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import todos from '../reducers/todos'

const TodoList = () => {
  const items = useSelector((store) => store.todos.items)
	//const completedItems = items.filter(item => item.isComplete)
  
	const dispatch = useDispatch()

  return (
    <div className="todo-container">
			{/*<p>Completed: {completedItems.length}/{items.length}</p>*/}
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