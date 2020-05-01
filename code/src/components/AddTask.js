import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todo } from '../reducers/todo'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import styled from 'styled-components'
import { Button } from '../styles/Button'
import { Subtitle, Label } from '../styles/Text'

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

  const Container = styled.form`
    display: flex;
    flex-direction: column;
  `;

  return (
    <>
      <Container onSubmit={handleSubmit}>
        <Subtitle>Add a new task</Subtitle>
        <Label>
          Category:
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value='' selected>select...</option>
            <option value="circle" selected>To-Do</option>
            <option value="shopping-cart">Shopping</option>
            <option value="briefcase">Work</option>
            <option value="users-friends">Family</option>
            <option value="user">Personal</option>
          </select>
        </Label>

        <Label>
          Task:
          <input
            type='text'
            value={task}
            placeholder='+ add a new task'
            onChange={(event) => setTask(event.target.value)}
          />
        </Label>

        <Label>
          Due date:
          <DatePicker onChange={(date) => setDueDate(date)} selected={dueDate} />
        </Label>

        <Button type='submit' disabled={!enabled}>Add task</Button>
      </Container>
    </>
  )
}
