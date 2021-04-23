import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import todos from 'reducers/todos'
import { RemoveTaskBtn } from './RemoveTaskBtn'


export const ItemContainer = () => {
  const items = useSelector((store) => store.todos.items)
  const dispatch = useDispatch()

  return (
    <div className="item-container">
        {items.map(todo => (
          <div key={todo.id} className="todo-item" style={ todo.isComplete ? {opacity: 0.5} : {opacity: 1}}>
              <p className="todo-task grid-item-1">{todo.description}</p>
            <div className="checkbox-complete grid-item-2">
              <label htmlFor="checkboxLabel">Complete: </label>
              <input 
                type="checkbox"            
                checked={todo.isComplete}
                onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
                name="checkboxLabel"
              />
            </div>
              <RemoveTaskBtn todo={todo} />    
          </div>      
        ))}
      </div>
  )
}