import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import todos from '../reducers/todos'

const TodoList = () => {
  const items = useSelector((store) => store.todos.items)

  const dispatch = useDispatch()

  return (
    <div className="todo-list">
      {items.map((todo) => (  // mutability -> (todo, index)
        <div key={todo.id} className="todo-item">
          <p>{todo.description}</p>
          <input
            type="checkbox"
            checked={todo.isComplete}
            onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
          /> 
          <button onClick={() => dispatch(todos.actions.removeTodo(todo.id))} className="delete-button">
            delete
          </button> 
        </div>
      ))}
    </div>
  )
}

export default TodoList
