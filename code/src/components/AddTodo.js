import React, { useState } from 'react'
import { useDispatch }  from 'react-redux'

import todos from '../reducers/todos'

import styled from 'styled-components'

const AddTodoWrapper = styled.div`
  display: flex;
  height: 50px;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 6px;
  border: 1px solid mintcream;;
  border-radius: 4px;
`

const Button = styled.button`
   margin-right: 4px;
   border: none;
   background-color: transparent;
   font-size: 30px;
   margin-right: 2px;
   cursor: pointer;
`

const InputField = styled.input`
  border: none;
  width: 100%;
  padding-left: 8px;
  font-size: 24px;

  &:focus {
  outline: none;
}

`
const AddTodo = () => {
  const [input, setInput] = useState('')

  const dispatch = useDispatch()

  const onAddTodo = () => {
    dispatch(todos.actions.addTodo(input))
  
    setInput('')
  }
  return (
    <AddTodoWrapper>
      <InputField 
        type='text' 
        value={input}
        placeholder='Add task' 
        onChange={(event) => setInput(event.target.value)}
      />
      <Button onClick={onAddTodo}
      disabled={input.length < 3 || input.length > 25} type="submit">+
      </Button>
    </AddTodoWrapper>
  )
}
 
export default AddTodo;