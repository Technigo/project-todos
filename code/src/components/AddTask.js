import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todo } from '../reducers/todo'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Button } from '../styles/Button'
import { Subtitle, Label } from '../styles/Text'
import { TextInput, DropDown } from '../styles/Input'
import { CategoryDateContainer } from '../styles/Container'

export const AddTask = () => {
  const [task, setTask] = useState('')
  const [category, setCategory] = useState('')
  const [dueDate, setDueDate] = useState()

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(todo.actions.addItem({ task, category, dueDate })) // name, category, duedate as payload
    setTask('')
    setCategory('')
    setDueDate('')
  }

  const enabled = task.length > 0 && dueDate > 0 && category.length > 0

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Subtitle>Add a new task</Subtitle>

        <CategoryDateContainer>
          <Label>
            Category:
          <DropDown
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              <option value='' selected>select...</option>
              <option value='To-Do' selected>To-Do</option>
              <option value='Shopping'>Shopping</option>
              <option value='Work'>Work</option>
              <option value='Family'>Family</option>
              <option value='Personal'>Personal</option>
            </DropDown>
          </Label>

          <Label>
            Due date:
          <DatePicker onChange={(date) => setDueDate(date)} selected={dueDate} />
          </Label>
        </CategoryDateContainer>

        <Label>
          Task:
          <TextInput
            type='text'
            value={task}
            placeholder='+ add a new task'
            onChange={(event) => setTask(event.target.value)}
          />
        </Label>

        <Button type='submit' disabled={!enabled}>Add task</Button>
      </form>
    </>
  )
}
