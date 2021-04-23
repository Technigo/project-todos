import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import uniqid from 'uniqid'

import todos from '../reducers/todos'

const NewTodoContainer = styled.form`
margin: 15px 0;

`

const Input = styled.input`
height: 30px;
width:280px;
margin: 1em;
border-radius: 10px;

`
const Button = styled.button`
  background-color: #ece4b7;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 3px solid #6C4123;
  border-radius: 10px;
  color: #6C4123;
`

const NewTodo = () => {
  const [value, setValue] = useState('');

  const dispatch = useDispatch()

  const onFormSubmit = (e) => {
    e.preventDefault();  

    const newTodo ={
      id:uniqid(),
      description:value,
      isComplete:false
    }

    dispatch(todos.actions.addTodo(newTodo))
    setValue('');
  } 

  return (
    <NewTodoContainer onSubmit={onFormSubmit}> 
      <Input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <Button type="submit">Add todo</Button>
    </NewTodoContainer>
  )
}

export default NewTodo
