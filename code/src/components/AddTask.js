import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import uniqid from 'uniqid'
import styled from 'styled-components'

import tasks from 'reducers/tasks'

const AddTask = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const onFormSubmit = (event) => {
    event.preventDefault()

    const newTask = {
      id: uniqid(),
      description: value,
      isComplete: false
    }

    dispatch(tasks.actions.addTask(newTask))
    setValue('')
  }

  return (
    <Container>
      <form onSubmit={onFormSubmit}>
        <label>
          <Input
            className="input"
            type="text"
            // placeholder="Add a to do..."
            value={value}
            onChange={(event) => setValue(event.target.value)}
            required
          />
          <SubmitButton className="submit-button" type="submit">
            +
          </SubmitButton>
        </label>
      </form>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  /* position: relative; */
`

const Input = styled.input`
  /* position: absolute; */
  all: unset;
  width: calc(100% - 20px);
  border: 4px solid black;
  /* margin: 10px auto; */
  padding: 7px;
  border-radius: unset;
  background-color: #cee9ed;
  font-size: 22px;
  z-index: -1;
  color: #2f2a65;
  ::placeholder {
    font-size: 16px;
    color: gray;
  }
`
const SubmitButton = styled.button`
  /* position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0; */
  all: unset;
  width: calc(100% - 20px);
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  padding-right: 8px;
  cursor: pointer;
  color: black;
  /* z-index: 0;
  display: inherit; */

  .submit-button:focus {
    outline: none;
  }
`

export default AddTask
