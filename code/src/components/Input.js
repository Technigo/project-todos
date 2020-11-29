import IconButton from '@material-ui/core/IconButton'
import TextField from '@material-ui/core/TextField'
import AddIcon from '@material-ui/icons/Add'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'

const Form = styled.form`
  max-width: 400px;
  width: 100%;
  margin-bottom: 0.5rem;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
`

const StyledTextField = styled(TextField)`
  flex: 1;
  background-color: #fff;
`

export const Input = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('')

  const handleOnSubmit = (event) => {
    event.preventDefault()

    dispatch(
      todos.actions.addItem({
        id: uuidv4(),
        text: input,
        isComplete: false
      })
    )
    setInput('')
  }

  return (
    <Form onSubmit={handleOnSubmit}>
      <Container>
        <StyledTextField
          size="small"
          variant="outlined"
          label="Add todo"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />

        <IconButton type="submit">
          <AddIcon />
        </IconButton>
      </Container>
    </Form>
  )
}
