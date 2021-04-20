import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'

import todos from '../reducers/todos'
import AddToDo from './AddToDo'
import Counter from './Counter'

// convention: Name the variable useSelector the same thing as we call it in reducer todos
const TodoList = () => {
  const items = useSelector((store) => store.todos.items)
//  console.log(items)

// need to create an instance of useDispatch() hook in every component. Under the hood useDispatch is constructed in a complex way. Why? QnA friday
  const dispatch = useDispatch()

  return (
    <div>
      {items.map(todo => (
        <div key={todo.id}>
          <p>{todo.description}</p>
          <input
            type="checkbox"
            checked={todo.isComplete}
            onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
          />
          <p className="completed-time"> 
            Created {moment(todo.createdAt).startOf('second').fromNow()}
          </p>
          <button
            type="button"
            onClick={() => dispatch(todos.actions.removeToDo(todo.id))}>
              x
          </button>
        </div>
      ))}
      <AddToDo />
      <Counter /> 
    </div>
  )
}

export default TodoList
