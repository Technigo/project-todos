import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'


export const AddTodo = () => {
  const [todo, setTodo] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    if (todo.length > 0) {
      dispatch(tasks.actions.addTodo((todo)))
      setTodo('') //so that our input clears after writing
    }
    else if (todo.length <= 0) {
      return alert('error')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <h1>Todo:</h1>
        <TextInputContainer>
          <SubmitButton type="submit"><span className="emoji" role="img" aria-label="add task"> ➕ </span>
          </SubmitButton>
          <TextInput type="text"
            placeholder="write here.."
            value={todo}
            onChange={(event) => setTodo(event.target.value)} />
        </TextInputContainer>
      </label>
    </form>
  )
}

const SubmitButton = styled.button`
  background: transparent;
  color: #e5e5e5;
  border: 3px solid #e5e5e5;
  padding: 5px;
  border-radius: 10px;
  text-transform: uppercase;
  &:hover {
    background: #e26d5a;
    cursor: pointer;
  }
`
const TextInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  padding-right: 10px;
  padding-bottom: 10px;
  `
const TextInput = styled.input`
  width: 100%;
  border-color: black;
  border-bottom-width: 1;
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  height: 100%;
  font-size: 18px;
  font-weight: bold;
  color: black;
  padding-left: 10px;
`