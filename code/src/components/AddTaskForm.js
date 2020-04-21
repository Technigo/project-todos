import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { notepad } from 'reducers/notepad'
import { Category } from 'library/Category'
import { Button } from 'library/Button'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

export const AddTaskForm = () => {

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [dueDate, setDueDate] = useState(new Date())
  const [category, setCategory] = useState('')


  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(notepad.actions.addTask({ name, description, dueDate, category }))
    setName('')
    setDescription('')
    setDueDate(new Date())
    setCategory('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type='text'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label>
        Description:
        <input
          type='text'
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </label>
      <label>
        Due Date:
        <DatePicker
          selected={dueDate}
          onChange={(date) => setDueDate(date)}
        />
      </label>
      <label>
        Category:
        <Category
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value='home'>home</option>
          <option value='work'>work</option>
          <option value='fun'>fun</option>
          <option value='coding'>coding</option>
          <option value='training'>training</option>
        </Category>
      </label>
      <Button type='submit'>Add</Button>
    </form>
  )
} 