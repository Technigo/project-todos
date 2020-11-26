import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { todos } from '../reducers/todos.js'

export const TaskInput = () => {

  const [text, setText] = useState("")

  const dispatch = useDispatch()

  const onSubmit = event => {
    // if (text === "") {
    //   alert("empty")
    // } else {
    event.preventDefault()
    dispatch(todos.actions.addTask(text))
    setText("")
    // }
  }

  return (
    <form onSubmit={onSubmit}>
      <textarea
        value={text}
        onChange={event => setText(event.target.value)}
        className="text-input">
      </textarea><br></br>
      <input
        type="submit"
        value="Add to do"
        className="submit-button">
      </input><br></br><br></br>
    </form>
  )

}