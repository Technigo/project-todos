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
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <TextInputContainer>
          <SubmitButton type="submit"><span className="emoji" role="img" aria-label="add task"> ➕ </span>
          </SubmitButton>
          <TextInput type="text"
            placeholder="Add todo..."
            maxLength='100'
            value={todo}
            onChange={(event) => setTodo(event.target.value)} />
        </TextInputContainer>
      </label>
    </form>
  )
}


const TextInputContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: baseline;
  padding-top: 10px;
  `
const TextInput = styled.input`
width: 70%;
  border-color:  #4a4a4a;
  border-bottom-width: 1;
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  height: 100%;
  font-size: 18px;
  font-weight: 600;
  color: black;
  padding-left: 10px;
`
const SubmitButton = styled.button`
  margin: 5px;
  background: transparent;
  color: #e5e5e5;
  border: 3px solid #e5e5e5;
  padding: 5px;
  border-radius: 10px;
  text-transform: uppercase;
  &:hover {
    background: #ece3c5;
    cursor: pointer;
  }
`