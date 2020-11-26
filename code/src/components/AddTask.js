import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import { tasks } from 'reducers/tasks'

export const AddTask = () => {
  const dispatch = useDispatch()
  //State for input from textbox
  const [value, setValue] = useState("")


  //Handle submit function to dispatch task
  const handleSubmit = (event) => {
    event.preventDefault()

    //Dispatch the action to save the new task.
    dispatch(
      tasks.actions.addTask({
        text: value,
        done: false
      })
    )

    //Clear the text field
    setValue("")
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <InputArea
          type="text"
          placeholder="Add task"
          onChange={event => setValue(event.target.value)}
          value={value}>
        </InputArea>
        <AddButton
          type="submit"><span role="img" aria-label="Add">➕</span></AddButton>
      </Form>
    </>
  )
}

const Form = styled.form`
margin-left: 10px;
`
const InputArea = styled.input`
margin-left: 10px;
`
const AddButton = styled.button`
  background-color: #e6e6e6; 
  padding: 5px;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`