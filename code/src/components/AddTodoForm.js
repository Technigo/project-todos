import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import DatePicker from 'react-date-picker';

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
          <option value=''>Category</option>
          <option value='Work'>Work</option>
          <option value='Study'>Study</option>
          <option value='Household'>Household</option>
          <option value='Shopping'>Shopping</option>
          <option value='Fun'>Fun</option>
          <option value='Other'>Other</option>
        </Select>
      </label>
      
      {/* date-picker to set dueDate below */}
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