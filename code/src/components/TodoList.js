import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import todos from 'reducers/todos'

const TodoList = () => {
  const items = useSelector((store) => store.todos.items)  
  const dispatch = useDispatch() 

  const incompleteTask = items.filter(todo => todo.isComplete !== true) 
  
  return (
    <div className="todo-container">
      <div className="counter-container">
        <p className="task-counter">Total tasks: {items.length}</p>
        <p className="task-counter">Remaing tasks: {incompleteTask.length}</p>
      </div>
      <div className="item-container">
        {items.map(todo => (
        <div key={todo.id} className="todo-item">
          <p className="todo-task grid-item-1">{todo.description}</p>
          <div className="checkbox-complete grid-item-2">
            <label htmlFor="isComplete">Complete: </label>
            <input 
              type="checkbox"            
              checked={todo.isComplete}
              onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
              name="isComplete"
            />
          </div>
          <div className="grid-item-3">
            <button
              className="remove-todo-btn"
              onClick={() => dispatch(todos.actions.removeTodo(todo.id))}>
                <span className="delete-icon" role="img">❌</span>
            </button>
          </div>
          <div>
            <p className="grid-item-4">{todo.createdAt}</p>
          </div>        
        </div>      
      ))}
      </div>      
    </div>
  )
}
export default TodoList