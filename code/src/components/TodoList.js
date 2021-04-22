import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import todos from '../reducers/todos'

const TodoList = () => {
  const items = useSelector((store) => store.todos.items)
  //when I want to reach for something= useSelector and the way to it store=handbag

  const dispatch = useDispatch()
  //When want to use/collect a method 

  return (
    <div> 
      {items.map(todo => (
        <div key={todo.id} className='todo-item'>
          <p>{todo.description}</p>
          <input
            type='checkbox'
            checked={todo.isComplete}
            onChange={() => dispatch(todos.actions.toggleComplete(todo.id)) }
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