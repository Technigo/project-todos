import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { todos } from 'reducers/todos'
import { AddTaskButton } from './StyledTodoList'

export const AddTodo = () => {
  const [input, setInput] = useState('')
  const [isActive, setActive] = useState(false)

  const toggleClass = () => {
    setActive(!isActive)
  }

  const dispatch = useDispatch()

  // const numberOfTodos = useSelector((store) => store.todos.length)

  const onAddTodo = () => {
    dispatch(todos.actions.addTodo(input))
    setInput('') //Clears input field
  }

  //Adds input on enter key
  const onEnter = (event) => {
    if (event.key === 'Enter') {
      onAddTodo()
    }
  }

  return (
    <div>
      <input
        className={isActive ? 'input-active' : 'input-hidden'}
        onKeyDown={(event) => onEnter(event)}
        type='text'
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button
        className={isActive ? 'button-active' : 'button-hidden'}
        disabled={input < 1}
        onClick={() => {
          onAddTodo()
          toggleClass()
        }}
      >
        Add todo
      </button>
      <AddTaskButton onClick={toggleClass}>&#9547;</AddTaskButton>
    </div>
  )
}
