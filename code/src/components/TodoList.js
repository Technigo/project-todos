import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import todos from '../reducers/todos'


const TodoList = () => {
  const items = useSelector((store) => store.todos.items)
  const dispatch = useDispatch()
  return (

    <div >
      {items.map(todo => (
        <div key={todo.id} className="todo-container" >
          <p>{todo.decription}</p>
          <input
            type="checkbox"
            checked={todo.isComplete}
            onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
          />
          <button onClick={() => dispatch(todos.actions.removeTodo(todo.id))}>
            Delete
          </button>
        </div>
      ))}
    </div>

  )

}

export default TodoList