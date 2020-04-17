import React, { useState } from "react"
import { useDispatch } from "react-redux"

import './Adding.css'
import { todos } from "../reducers/todos"

export const AddingTodo = () => {

  const [postNew, setPostNew] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = event => {
    event.preventDefault()
    dispatch(todos.actions.addTodo(postNew))
    setPostNew('')
  }

  return (
    <form>

      <input type="text"
        value={postNew} 
        placeholder="What To Do?"
        onChange={(event) => 
        setPostNew(event.target.value)} />

      <button type="submit"
        onSubmit={handleSubmit}
        disabled={postNew.length === 0}>
        ADD
      </button>

    </form>
  )
}