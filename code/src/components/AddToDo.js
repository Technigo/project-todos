import React, { useState, Component } from 'react'         
import { useSelector, useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import styled from 'styled-components'
import { Container } from '../styling/GlobalStyles'
import todos from 'reducers/todos'

const AddTodo = () => {
  const dispatch = useDispatch()
  const id = uuidv4()

  const [newTodo, setNewTodo] = useState('')
  const [category, setCategory] = useState('')

  const onCategoryChange = (e) => {
    setCategory(e.target.value)
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
    <Container>
    <Form onSubmit={onFormSubmit}>
      <UserInputTextarea
        type="text"
        maxLength="45"
        placeholder="Add your todo..."
        onChange={(event) => setNewTodo(event.target.value)}
        value={newTodo}        
      >
      </UserInputTextarea>
      <AddButton
        type='submit'
      > 
          +
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
    </Form>
    </Container>
  )
}

// Local styles obs! Form is that really local style???? 
const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  border: 1px solid hotpink;
  border-radius: 0.25em;
  padding: 0.25em 0.5em;  
  cursor: pointer;
  background-color: transparent;
  outline: 0; 
`;

const UserInputTextarea = styled.textarea`
  border-radius: 0.25em;
  background-color: transparent;
  resize: none;
`;

const AddButton = styled.button`
  border-radius: 50%;
  margin: 20px 0px;
`;


export default AddTodo