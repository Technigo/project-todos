import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import styled from 'styled-components'
import { apa } from '../reducers/apa';

export const AddItem = () => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('Test')

  const handleSubmit = e => {
    e.preventDefault()

    const date = new Date()

    dispatch(
      apa.actions.addTodo({
        itemInfo: {
          id: Date.now(),
          description: inputValue,
          category: 'work',
          startDate: date.toLocaleDateString( 'se-SE', { dateStyle: 'short' }),
          dueDate: 2021
        }
      })
    )

    setInputValue()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={e => setInputValue(e.target.value)}
        value={inputValue}
      ></input>
      <input
        type="submit"
        value="Add Todo"
      ></input>
    </form>
  )
}