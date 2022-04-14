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
    <FormContainer>
      <form onSubmit={onFormSubmit}>
        <label>
          <input
            className=""
            type="text"
            placeholder="Add a to do..."
            value={value}
            onChange={(event) => setValue(event.target.value)}
            required
          />
          <button className="submit-button" type="submit">
            +
          </button>
        </label>
      </form>
    </FormContainer>
  )
}

const FormContainer = styled.form`
  margin: 30px;
  padding: 40px;
`

export default AddTask
