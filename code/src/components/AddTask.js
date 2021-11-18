import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import todos from '../reducers/todos'

const AddTaskForm = styled.form`
  margin-bottom: 30px;
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
      <button 
        type='submit'
        disabled = {!input}
        onClick={() => onAddToDo(input, category)}>Add new task
      </button>
    </AddTaskForm>
  )
}

export default AddTask
