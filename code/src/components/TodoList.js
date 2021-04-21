import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import moment from 'moment'

import todos from '../reducers/todos'
import AddToDo from './AddToDo'
import Counter from './Counter'

import { Background } from '../styling/GlobalStyles'

// convention: Name the variable useSelector the same thing as we call it in reducer todos
const TodoList = () => {
  const items = useSelector((store) => store.todos.items)
//  console.log(items)

// need to create an instance of useDispatch() hook in every component.
  const dispatch = useDispatch()

  return (
    <Background>
      {items.map(todo => (
        <div key={todo.id}>
          <p>{todo.description}</p>
          <input
            type="checkbox"
            checked={todo.isComplete}
            onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
          />
          <p className="completed-time"> 
            {moment(todo.createdAt).format('LT, MMMM Do YYYY')}
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
    </Background>
  )
}

export default TodoList
