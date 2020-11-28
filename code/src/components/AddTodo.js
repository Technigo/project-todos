import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import { tasks } from '../reducers/tasks'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`
const StyledButton = styled(Button)`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 14px;
  width: 100%;
  height: 50px;
  &:hover {
    background-color: #5469d4;
  }
`
const StyledTextField = styled(TextField)`
  width: 100%;
`

export const AddTodo = () => {
  const dispatch = useDispatch()
  const [ text, setAddItem ] = useState('')
  const [ id, setaddId ] = useState(0)

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(
      tasks.actions.addItem({
        id, 
        text,
      })
    )
    setaddId(id + 1)
    setAddItem('')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <StyledTextField type="text" value={text} placeholder="Insert task here.." onChange={(event) => setAddItem(event.target.value)} variant="outlined" />
      <StyledButton type="submit" value="Submit">ADD</StyledButton>
    </Form>
  )
}

