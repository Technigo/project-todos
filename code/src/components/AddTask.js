import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks' 

import styled from 'styled-components'

import Logo from './assets/plus.svg'

const Container = styled.form`
  display: flex;
  justify-content: flex-start;
  align-self: flex-start;
  background-color: #ffffff;
  padding: 10px 10px;
  margin: 10px 0;
  box-shadow: 10px 13px 21px -18px rgba(158,158,158,1);
  width: 100%;
`

const TextField = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #dddddd;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 300;
  font-size: 18px;
  width: 100%;

  &:focus {
    outline: 2px solid #9576A5;
  }

  @media (max-width: 280px) {
    font-size: 14px;
  }
`
const CategoryField = styled.select`
  display: none; //categories are not used at the moment
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #000000;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 300;

  &:focus {
    outline: 2px solid #9576A5;
  }

  option {
    color: red;
    font-size: 20px;
    background: blue;
    display: flex;
  }
`
const TaskButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:disabled {
    opacity: 0.4;
  }
`

const AddIcon = styled.img`
  width: 12px;
  height: 12px;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    transform: scale(1.4);
  }
`

export const AddTask = () => {
  const [newTask, setNewTask] = useState('')
  const [category, setCategory] = useState()

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(tasks.actions.addItem({ newTask, category }))
    setNewTask('')
    setCategory('')
  }

  return (
    <Container
      onSubmit={handleSubmit}
    >
      <TaskButton
        type="submit"
        disabled={newTask.length < 5 ? true : false}
      >
        <AddIcon
          src={Logo}
          alt="add task"
        />
      </TaskButton>
      <TextField
        type="text"
        value={newTask}
        placeholder="add new task.."
        onChange={event => setNewTask(event.target.value)}
      />
      <CategoryField // CATEGORIES ARE NOT USED AT THE MOMENT. 
        value={category}
        onChange={event => setCategory(event.target.value)}
      >
        <option value disabled>select category...</option>
        <option value="appointment">appointment</option>
        <option value="household">household</option>
        <option value="self-care">self-care</option>
        <option value="shopping">shopping</option>
      </CategoryField>
    </Container>
  )
}