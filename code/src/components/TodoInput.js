import React, { useState } from 'react'
import uniqid from 'uniqid'
import {useDispatch } from 'react-redux'
import styled  from 'styled-components'

import todos from '../reducers/todos'

const InputField = styled.form `
  height: 30px;
  width: 100%;
  border-bottom: 2px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`
const Button = styled.button `
  background: none; 
  border: none;
  outline: none;
  color: gray;
  margin-bottom: 15px;
`

const TodoInput = () => {
  const [newTask, setNewTask] = useState('')

  const dispatch = useDispatch()

  const onFormSubmit = (e) => {
    e.preventDefault()

      const newTodo = {
        id: uniqid(),
        description: newTask,
        isComplete: false 
      }
      dispatch(todos.actions.addTodo(newTodo))
      setNewTask('')
  }

  return (
    <InputField
      onSubmit={onFormSubmit}
    >
      <input
        placeholder="Add new task.."
        type="text"
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
      />
      <Button type="submit">
        Add 
      </Button>
    </InputField>
  )

}

export default TodoInput