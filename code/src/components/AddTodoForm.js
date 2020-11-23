import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import DatePicker from 'react-date-picker';
// import styled fron 'styled-components'

import { todos } from 'reducers/todos'
import { AddButton } from 'library/Buttons'
import { AddTodoEmoji } from 'library/Emojis'
import { InputText } from 'library/Text'
import { Select } from 'library/Select'
import '../styles/AddTodoForm.css'

export const AddTodoForm = () => {
  const [text, setText] = useState('')
  const [category, setCategory] = useState('')
  const [dueDate, setDueDate] = useState(new Date())

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(todos.actions.addItem({ text, category, dueDate }))
    // text, category & dueDate as payloads
    setText('') // clears input
    setCategory('') // clears input
    setDueDate('') // clears input
  }

  //✍︎✎
  return (
    <form onSubmit={handleSubmit}>
      <AddTodoEmoji>📝</AddTodoEmoji>
      <label aria-label='add todo'>
        <InputText
          placeholder='New task'
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
      
      {/* date-picker to set dueDate below 
      (don't know if it's fully implemented right now? Looks really strange) */}
      <label>
        <DatePicker 
          selected={dueDate}
          onChange={(date) => setDueDate(date)} 
          value={dueDate} 
        />
      </label>
      <AddButton 
        type='submit' 
        disabled={text.length < 3}
      >
        +
      </AddButton>
    </form>
  )
}