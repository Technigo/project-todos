import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import todos from '../reducers/todos'
import AddToDo from './AddToDo'

// convention: Name the variable useSelector the same thing as we call it in reducer todos
const TodoList = () => {
  const items = useSelector((store) => store.todos.items)
//  console.log(items)
//  console.log(todos) // no initialState property in our object todos slice

//const wholeStore = useSelector((store) => store)

// create an instance of useDispatch() in every component. Why? QnA friday
  const dispatch = useDispatch()
//make a list out of this !
// all of the other features of this week will be repetition of this, the same flow 
/*   console.log(todos)
  console.log(wholeStore) */
  return (
    <div>
      {items.map(todo => (
        <div key={todo.id}>
          <p>{todo.description}</p>
          <input
            type="checkbox"
            checked={todo.isComplete}
            //todos from import todos above
            onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
          />
        </div>
      ))}
      <AddToDo />
    </div>
  )
}

export default TodoList
