import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import uniqid from 'uniqid'
import styled from 'styled-components'

import todos from '../reducers/todos'

const Form = styled.form`
  width:90%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content: space-evenly;
  border: solid 1px red;
  margin-top:30px;
  @media (min-width:768px) {
    max-width: 500px;
  }
  
`

const Todoinput = styled.input`
  width:70%;
  height:40px;
  background-color:inherit;
  border:none;
  border-bottom: double #5c5756;
  color:#363232;
  font-family: 'Shadows Into Light', cursive;
  font-size:30px;
  text-align:center;
  padding:0px;
`
const AddButton = styled.button`
  background-color:#f9ac45;
  color:#363232;
  border:solid 2px #b67764;
  height: 30px;
  border-radius:10px;
  font-family: 'Shadows Into Light', cursive;
  font-size:20px;
  padding:auto;
  text-align:center;
  width:80px;
  height:30px;
  margin-top:15px;
`

export const TodoForm = () => {
  const [value, setValue] = useState('')

  const dispatch = useDispatch()

  const onFormSubmit = (e) => {
    e.preventDefault()

    const newTodo = {
      id: uniqid(),
      description: value,
      isComplete: false
    }

    dispatch(todos.actions.addTodo(newTodo))
    setValue('')
  }

  return (
    <Form onSubmit={onFormSubmit}>
      <Todoinput
        type='text'
        placeholder='What todo?'
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      
      <AddButton type='submit'>Add it</AddButton>
    </Form>
  )
}