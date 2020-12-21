import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { tasks } from 'reducers/tasks'
import { InputArea, Form, AddButton } from "../styling/styleAddTask"

export const AddTask = () => {
  const dispatch = useDispatch()
  //State for input from textbox
  const [text, setText] = useState("")

  //Handle submit function to dispatch task
  const handleSubmit = (event) => {
    event.preventDefault()

    //Dispatch the action to save the new task.
    dispatch(
      tasks.actions.addTask({
        text: text,
        done: false
      })
    )

    //Clear the text field
    setText("")
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <InputArea
          type="text"
          placeholder="Add task"
          onChange={event => setText(event.target.value)}
          value={text}>
        </InputArea>
        <AddButton
          type="submit" disabled={text.length < 2} ><span role="img" aria-label="Add">➕</span>
        </AddButton>
      </Form>
    </>
  )
}

