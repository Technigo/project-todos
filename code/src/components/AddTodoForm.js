import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'
import { Button } from 'library/Button'
import { AddTodoEmoji } from 'library/Emojis'
import { InputText } from 'library/Text'
import { Select } from 'library/Select'
// import styled fron 'styled-components'

export const AddTodoForm = () => {
  const [text, setText] = useState('')
  const [category, setCategory] = useState('')
  // What does dueDate do here? 
  const [dueDate, setDueDate] = useState()

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(todos.actions.addItem({ text, dueDate }))
    setText('')
  }

  //✍︎✎
  return (
    <form onSubmit={handleSubmit}>
      <AddTodoEmoji>
        📝 {' '}
      </AddTodoEmoji>
      <label aria-label='add todo'>
        <InputText
          placeholder='Type your todo here...'
          type='text'
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </label>
      <label>
        <Select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value=''>category</option>
          <option value='work'>work</option>
          <option value='study'>study</option>
          <option value='household'>household</option>
          <option value='shopping'>shopping</option>
          <option value='fun'>fun</option>
          <option value='other'>other</option>
        </Select>
      </label>
      <Button 
        type='submit' 
        disabled={text.length < 3}
        background='#7797be'
      >
        Add
      </Button>
    </form>
  )
}