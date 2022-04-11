import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import uniqid from 'uniqid'
import styled from 'styled-components'

import tasks from 'reducers/Tasks'

const FormContainer = styled.form`
  background-color: #e5e0cc;
  margin: 30px;
  padding: 40px;
`

const AddTask = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const onFormSubmit = (event) => {
    event.preventDefault()

    const newTask = {
      id: uniqid(),
      description: value
    }

    dispatch(tasks.actions.addTask(newTask))
    setValue('')
  }

  return (
    <FormContainer>
      <form onSubmit={onFormSubmit}>
        <div>TO DO</div>
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
      </form>
    </FormContainer>
  )
}

export default AddTask
