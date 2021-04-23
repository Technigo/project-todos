import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import uniqid from 'uniqid'
import styled from 'styled-components'

import todos from '../reducers/todos'

const FormContainer = styled.form`
  display: flex;
  border-bottom: 1px solid grey;
`

const InputForm = styled.input`
  display: flex;
  align-items: center;
 
  height: 30px;
  margin: 20px 5px 20px 15px;
`

const FormButton = styled.button`
margin: 20px 2px 20px 2px;
` 

const TodoForm = () => {
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
    <FormContainer onSubmit={e => onFormSubmit(e)}>
      <InputForm
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <FormButton type="submit">Add task</FormButton>
    </FormContainer>
  )
}

export default TodoForm