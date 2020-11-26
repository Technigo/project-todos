import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { tasks } from '../reducers/tasks'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

const Button = styled.button`
  display: inline-block;
  background-color: white;
  color: tomato;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 4px solid tomato;
  border-radius: 3px;
  display: block;
  height: 40px;
  width: 100%;
  margin: 10px;
`

const Input = styled.input`
  width: 100%;
  height 25px;
  background-color: white;
  border: 4px solid tomato;
  border-radius: 3px;
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
      <Input type="text" value={text} placeholder="Insert task here.." onChange={(event) => setAddItem(event.target.value)} />
      <Button type="submit" value="Submit">ADD</Button>
    </Form>
  )
}

