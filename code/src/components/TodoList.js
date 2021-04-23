import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import todos from '../reducers/todos'

const TodoList = () => {
  const items = useSelector((store) => store.todos.items)
  const emptyList = items.length > 0

  const dispatch = useDispatch()

  return (
    <>
    {emptyList ? (
      <div className="list-container">
      {items.map(todo => (
        <div key={todo.id} className= {todo.isComplete ? "done todo-container" : "not-done todo-container"}>
          <div className="task-container"> 
            <p>{todo.description}</p>
            <div className="buttons">
              
              <input
                type="checkbox"
                checked={todo.isComplete}
                onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
              />
              <button 
                className="delete-button"
                onClick={() => dispatch(todos.actions.deleteItem(todo.id))}
              >
                <span role="img" aria-label="bin-emoji">🗑️</span>
              </button>
            </div>
          </div>
          <div className="date-container">
            <p>Created {todo.createdAt}</p>
          </div>
        </div>
      ))}
    </div>
    ): (
      <div className="list-container">
        <h4>Anything to do today <span role="img" aria-label="emoji">🤷‍♀️</span> ?</h4>
      </div>
    )}
    </>
    
  )
}

export default TodoList