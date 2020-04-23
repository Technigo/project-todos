import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { notepad } from 'reducers/notepad'
import { Category } from 'library/Category'
import { AddButton, Button } from 'library/Button'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { AddTaskContainer, FormContainer } from 'library/Container'
import ToggleDisplay from 'react-toggle-display'
import styled from 'styled-components'


export const AddTaskForm = () => {

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [dueDate, setDueDate] = useState(new Date())
  const [category, setCategory] = useState('')
  const [show, setShow] = useState(false)

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(notepad.actions.addTask({ name, description, dueDate, category, show }))
    setName('')
    setDescription('')
    setDueDate(new Date())
    setCategory('')
    setShow(false)
  }

  const addTaskHandler = () => {
    setShow(!show)
  }

  const FormLabel = styled.label`
    margin-right: 20px;
    padding: 5px;
  `

  return (
    <>
      <AddTaskContainer>
        <AddButton onClick={addTaskHandler}> {show ? '-' : '+'} </AddButton>
        Add a task
      </AddTaskContainer>
      <ToggleDisplay show={show}>
        <FormContainer>
          <form onSubmit={handleSubmit}>
            <FormLabel>
              Title:
            <input
                type='text'
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </FormLabel>
            <FormLabel>
              Description:
            <input
                type='text'
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </FormLabel>
            <FormLabel>
              Due Date:
            <DatePicker
                selected={dueDate}
                onChange={(date) => setDueDate(date)}
              />
            </FormLabel>
            <FormLabel>
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
            </FormLabel>
            <Button type='submit'>Add to the list</Button>
          </form>
        </FormContainer>
      </ToggleDisplay>
    </>
  )
} 