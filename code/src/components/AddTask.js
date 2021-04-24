import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import uniqid from 'uniqid'
import styled from 'styled-components'

import todos from '../reducers/todos'

const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid grey;
  background-color: #f0f0fc;
`

const InputForm = styled.input`
  display: flex;
  align-items: center;
  width: 230px;
  height: 30px;
  margin: 25px 5px 25px 10px;
`

const FormButton = styled.button`
  margin: 25px 10px 25px 2px;
  width: 70px;
  height: 36px;
  color: #032640;
` 

const AddTask = () => {
  const [value, setValue] = useState('')

  const dispatch = useDispatch()

  const onFormSubmit = (e) => {
    e.preventDefault()

    const newTodo = {
      id: uniqid(),
      description: value,
      isComplete: false,
      dueDate: new Date().toJSON()
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

export default AddTask