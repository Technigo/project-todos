import React, { useState } from 'react'         
import { useDispatch } from 'react-redux'
import { Select } from '@material-ui/core'
import { v4 as uuidv4 } from 'uuid'

import styled from 'styled-components'

import todos from 'reducers/todos'


const AddTodo = () => {
  const dispatch = useDispatch()
  const id = uuidv4()

  const [newTodo, setNewTodo] = useState('')
  const [category, setCategory] = useState('')

  const options = [
    {value: 'Home', label: 'Home'},
    {value: 'Work', label: 'Work'},
    {value: 'Studies', label: 'Studies'},
    {value: 'Friends', label: 'Friends'},
    {value: 'Love', label: 'Love'},
    {value: 'Hobbies', label: 'Hobbies'},
    {value: 'Fitness', label: 'Fitness'},
    {value: 'Other', label: 'Other'}
  ]

  const onSelectChange = (optionSelected) => {
    setCategory(optionSelected.value)
    return optionSelected
  }
  
  const onFormSubmit = (event) => {
		event.preventDefault();
		console.log('user entry: ' + newTodo) // remove later

    if (newTodo && category !== '') {
      dispatch(
        todos.actions.addToDo({
          id,
          description: newTodo,
          category,
          isComplete: false,
        })
      )
      setNewTodo('') // clear input 
      setCategory('') // clear category
    } else {
      alert ('Please type your todo and/or select a category first')
    } 
	}

  return (
    <form onSubmit={onFormSubmit}>
      <textarea
        type="text"
        maxLength="40"
        placeholder="Add your todo..."
        onChange={(event) => setNewTodo(event.target.value)}
        value={newTodo}        
      >
      </textarea>
      <button 
        type='submit'
      > 
          +
      </button>
      <div>
      <Label>Set category:</Label>
        <CustomSelect
          value={category.value}
          onChange={onSelectChange}
          options={options} 
          placeholder="Select a category"
        />
        </div>
    </form>
  )
}

const Label = styled.label`
  font-size: 10px;
  text-transform: uppercase;
  padding-bottom: 20px;
`;

const CustomSelect = styled.select`
  width: 200px;
  margin-bottom: 10px;
`;

export default AddTodo