import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todos } from '../reducers/todos'

export const Input = () => {
  const [inputValue, setInputValue] = useState('')

  const dispatch = useDispatch()

  const handleOnSubmit = event => {
    event.preventDefault()
    console.log(inputValue)
    dispatch(
      todos.actions.addTodoItem({
        description: inputValue,
        done: false
      })
    )
    setInputValue('')
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <input
      type='text'
      onChange={event => setInputValue(event.target.value)}
      value={inputValue}
      />

      <button
        type='submit'
        value='add todo'
      >
      Click
      </button>
      
    </form>
  )
}