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
      <button type="submit">
        Add 
      </button>
    </InputField>
  )

}

export default TodoInput