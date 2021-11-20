import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import todos from '../reducers/todos'
import { AddBtn } from './Buttons'

const AddTaskForm = styled.form`
  margin-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  & input {
    appearance: none;
    padding: 0 5px;
    height: 30px;
    font-family: inherit;
    font-size: 14px;
    border-color: var(--lax);
    border-radius: 5px;
    border: 1px solid var(--brown);
    width: 67%;

    &:focus {
      outline: none !important;
    }
    @media (min-width: 1024px) {
      font-size: 17px;
      height: 40px;
    }
  }

  & select {
    background: var(--lax);
    color: var(--white);
    font-family: inherit;
    font-size: 14px;
    border: 1px solid var(--brown);
    border-radius: 0.4em;
    padding: 0 3px;

    @media (min-width: 1024px) {
      font-size: 17px;
      padding: 0 7px;
    }
  }

  @media (min-width: 667px) {
    width: 400px;
  }
` 

const AddTask = () => {
  const [input, setInput] = useState('')
  const [category, setCategory] = useState('')
  const dispatch = useDispatch()

  const onAddToDo = (input, category) => {
    dispatch(todos.actions.addToDo({ input, category }))
    setInput('')
    setCategory('')
  }

  const options = ['Work', 'Study', 'Shopping', 'Other']

  return (
    <AddTaskForm>
      <input 
        type='text'
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <select 
        id='categories'
        value= {category}
        onChange={(event) => setCategory(event.target.value)}
      >  
        <option disabled value="">Category</option>
        {options.map((opt)=> (
          <option 
          key={opt} 
          value={opt}>{opt}
        </option>))}
      </select>
      <AddBtn 
        type='submit'
        disabled = {!input}
        onClick={() => onAddToDo(input, category)}
        text='Add task'>
      </AddBtn>
    </AddTaskForm>
  )
}

export default AddTask
