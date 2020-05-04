import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { todo } from '../reducers/todo'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Select from 'react-select'
import { Button } from '../styles/Button'
import { Subtitle, Label } from '../styles/Text'
import { TextInput } from '../styles/Input'

export const AddTask = () => {
  const options = useSelector((store) => store.todo.categories)

  const [task, setTask] = useState('')
  const [category, setCategory] = useState('')
  const [dueDate, setDueDate] = useState()

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    dispatch(todo.actions.addItem({ task, category, dueDate })) // name, category, duedate as payload
    setTask('')
    setCategory('')
    setDueDate('')
    event.preventDefault()
  }

  const handleChange = category => {
    setCategory(category.value)
  }

  const enabled = task.length > 0 && dueDate > 0 && category.length > 0

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Subtitle>Add a new task</Subtitle>

        <Label>
          Category:
            <Select
            value={(category === '') ? null : category.value}
            onChange={handleChange}
            options={options}
          />
        </Label>

        <Label>
          Due date:
          <DatePicker onChange={(date) => setDueDate(date)} selected={dueDate} placeholderText='select a due date' />
        </Label>


        <Label>
          Task:
          <TextInput
            type='text'
            value={task}
            placeholder='write a new task'
            onChange={(event) => setTask(event.target.value)}
          />
        </Label>

        <Button type='submit' disabled={!enabled}>Add task</Button>
      </form>
    </>
  )
}
