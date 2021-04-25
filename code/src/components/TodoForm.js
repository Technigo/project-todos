import React, { useState } from 'react'
import uniqid from 'uniqid'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import COLORS from './Colors.js'
import todos from '../reducers/todos'

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
    <Form onSubmit={onFormSubmit}>
      <Input 
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <Button type="submit">Add todo</Button>
    </Form>
  )
}


const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
`

const Input = styled.input`
  border: 2px solid ${COLORS.lightGrey};
  border-radius: 8px;
  padding: 2px 8px;
  font-size: 16px;
  margin: 0;
  padding: 2px 8px;
  width: 100%;
  margin-right: 8px;
  height: 36px;
  color: ${COLORS.darkGrey};
`
const Button = styled.button`
  width: 200px;
  height: 44px;
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 8px;
  background: ${COLORS.lightGrey};
  color: ${COLORS.darkGrey};
  font-size: 16px;
  &:hover {
    background: ${COLORS.midGrey}
  }
`

export default TodoForm
