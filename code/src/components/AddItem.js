import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todoList } from '../reducers/todoList'
import styled from 'styled-components'

const AddItem = () => {
  const dispatch = useDispatch()
  const [todoValue, setTodoValue] = useState("")

  const submitTodo = (e) => {
    e.preventDefault()
    dispatch(todoList.actions.addTask(todoValue))
    setTodoValue("")
  }
  
  return (
    <Form className="add-item collection" onSubmit={(e) => submitTodo(e)}>
      <label htmlFor="addItem"></label>
      <Input 
        id="addItem" 
        type="text" 
        onChange={(e) => setTodoValue(e.target.value)}
        placeholder="+ Add new task"
        value={todoValue}
      />
    </Form>
    )
}

const Form = styled.form`
  border: 0;
  background: transparent;
`
const Input = styled.input`
  background: transparent;
  border: none;
  border-bottom: 1px solid #fff;
  padding-bottom: 5px;
  width: 100%;

  &::placeholder {
    font-size: 14px;
    color: #ffb703;
  }
  &:focus {
      opacity: 0.5;
      border-bottom: 1px solid ##a8dadc;
      outline: none;
      background: transparent;
      color: #fff;
      font-size: 16px;
      transition: ease 0.5s;
    }
  }
  `

export default AddItem