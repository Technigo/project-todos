import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import uniqid from 'uniqid'

import todos from '../reducers/todos'


const Input = styled.input`
  width:100%;
  border: none;
  outline:none;
  background: none;
  font-size: 18px;
  color: #555;
  padding:20px 10px 20px 5px;
  margin: 30px 0 15px 0;
  border-radius: 25px;
  box-shadow: inset 8px 8px 8px #cbced1,
              inset -8px -8px 8px #ffffff;
`
const Button = styled.button`
  outline: none;
  border:none;
  cursor: pointer;
  width:150px;
  height: 60px;
  border-radius: 30px;
  font-size: 20px;
  font-weight: 700;
  font-family: 'Lato', sans-serif;
  color:#fff;
  text-align: center;
  background: #24cfaa;
  box-shadow: 3px 3px 8px #b1b1b1,
              -3px -3px 8px #ffffff;
  transition: 0.5s;
  }
  &:hover {
  background:#2fdbb6;
  }
  &:active {
  background:#1da88a;
  }
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
    <form onSubmit={onFormSubmit}> 
      <Input
        type="text"
        value={value}
        placeholder="Enter a new task"
        onChange={e => setValue(e.target.value)}
      />
      <Button type="submit">Add task</Button>
    </form>
  )
}

export default NewTodo
