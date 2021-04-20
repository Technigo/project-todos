import React, { useState } from 'react'         
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import todos from 'reducers/todos'

const AddTodo = () => {
  const dispatch = useDispatch()

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
    {value: 'Other', label: 'Other'},
  ]

  const onSelectChange = (optionSelected) => {
    setCategory(optionSelected.value)
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
        maxLength="60"
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
      <label>Set category:</label>
        <select
            value={category.value}
            onChange={onSelectChange}
            options={options} //vad är detta? 
            placeholder="Select a category"
          />
        </div>
    </form>
  )
}

export default AddTodo