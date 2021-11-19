import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'
import {
  AddTodoButton,
  AddTodoContainer,
  AddTodoInput,
  SendButton,
} from './StyledTodoList'

export const AddTodo = () => {
  const [input, setInput] = useState('')
  const [isActive, setActive] = useState(false)

  const toggleClass = () => {
    setActive(!isActive)
  }

  const dispatch = useDispatch()

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
    <AddTodoContainer>
      <AddTodoInput
        className={isActive ? 'input-active' : 'input-hidden'}
        onKeyDown={(event) => onEnter(event)}
        placeholder='Add todo..'
        type='text'
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <SendButton
        className={isActive ? 'button-active' : 'button-hidden'}
        disabled={input < 1}
        onClick={() => {
          onAddTodo()
          toggleClass()
        }}
      >
        Add todo
      </SendButton>
      <AddTodoButton
        className={isActive ? 'addtask-active' : 'default-button'}
        onClick={toggleClass}
      >
        <p>&#9547;</p>
      </AddTodoButton>
    </AddTodoContainer>
  )
}
