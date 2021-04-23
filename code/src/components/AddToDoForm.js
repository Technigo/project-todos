import React, { useState } from 'react'         
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import styled from 'styled-components'

import todos from 'reducers/todos'
import TodoStudies from './TodoStudies'
import TodoWork from './TodoWork'
import TodoHome from './TodoHome'

const AddTodoForm = () => {
  const dispatch = useDispatch()
  const id = uuidv4()

  const [newTodo, setNewTodo] = useState('')
  const [category, setCategory] = useState('')

  const onCategoryChange = (e) => {
    setCategory(e.target.value)
  }

  const onFormSubmit = (event) => {
		event.preventDefault()

    if (newTodo && category !== '') {
      dispatch(
        todos.actions.addToDo({
          id,
          description: newTodo,
          category,
          isComplete: false,
        })
      )
      setNewTodo('')
      setCategory('')
    } else {
      alert ('Please type your todo and/or select a category first')
    } 
	}

  return (
    <>
      <Form onSubmit={onFormSubmit}>
        <UserInputTextarea
          type="text"
          maxLength="45"
          placeholder="Write your todo here..."
          onChange={(event) => setNewTodo(event.target.value)}
          value={newTodo}        
        >
        </UserInputTextarea>
          <AddButton
            type='submit'>
              add todo
            <img src="/assets/plus.svg" alt="plus sign on button"/>
          </AddButton>
          <Label htmlFor="category">
            Choose category
          </Label>
          <CustomSelect
            id="category" 
            value={category} 
            onChange={onCategoryChange}
          >
            <option disabled value="">Categories</option>
            <option value="Home">Home</option>
            <option value="Work">Work</option>
            <option value="Studies">Studies</option>
            <option value="Friends">Friends</option>
            <option value="Love">Love</option>
            <option value="Hobbies">Hobbies</option>
            <option value="Fitness">Fitness</option>
            <option value="Other">Other</option>
          </CustomSelect>
            <TodoHome />
            <TodoStudies />
            <TodoWork />
      </Form>
    </>
  )
}

// Local styles
const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const UserInputTextarea = styled.textarea`
  margin: 40px 0px;
  border-radius: 0.25em;
  border: 1px solid #216dff; 
  background-color: transparent;
  resize: none;
  outline: 0; 
  width: 200px;
`;

// or this color: #FF10F0; like hotpink but not really ***
const AddButton = styled.button`
  border-radius: 50%;
  margin-bottom: 40px;
  background-color: #216dff;
  color: #d5c2df;
  width: 120px;
  height: 120px;
  text-transform: uppercase;
`;

const Label = styled.label`
  font-size: 10px;
  text-transform: uppercase;
  padding-bottom: 20px;
`;

const CustomSelect = styled.select`
  width: 200px;
  text-transform: uppercase;
  font-family: inherit; 
  border: 1px solid #216dff;
  border-radius: 0.25em;
  padding: 0.25em 0.5em;  
  cursor: pointer;
  background-color: transparent;
  outline: 0;
  margin-bottom: 40px;
`;

export default AddTodoForm