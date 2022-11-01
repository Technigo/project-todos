/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import todos from '../reducers/todos'

const NewTodo = () => {
// Local states
  const [name, setName] = useState('')

  const dispatch = useDispatch()

  // a function for dealing with new todos
  const HandleSubmit = (event) => {
    event.preventDefault()
    dispatch(todos.actions.addToDo({ name }))
    setName('')
  }

  return (
    <ToDoWrapper>
      <form>
        <label htmlFor="new-todo"> New to-do </label>
        <input
          type="text"
          value={name}
          name="new-todo"
          onChange={(event) => setName(event.target.value)} />
        <button type="submit" onClick={HandleSubmit}>Add</button>
      </form>
    </ToDoWrapper>
  )
}

export default NewTodo

const ToDoWrapper = styled.section`
    background-color: #f2e2c8;
    padding: 10px;
`