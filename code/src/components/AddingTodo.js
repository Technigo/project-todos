import React, { useState } from "react"
import { useDispatch } from "react-redux"

import { todos } from "reducers/todos"
import './style/Adding.css'


export const AddingTodo = ({ todoId }) => {
  const [postNew, setPostNew] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = event => {
    event.preventDefault()

    dispatch(
      todos.actions.addTodo({
        todoId: todoId,
        todoInfo: { text: postNew, complete: false }
      })
    )
    setPostNew('')
  }

  return (
    <form className="addingTodo" onSubmit={handleSubmit}>

      <textarea type="text"
        value={postNew} 
        placeholder="What To Do?"
        onChange={(event) => 
        setPostNew(event.target.value)} />

      <button type="submit"
        disabled={postNew.length === 0}>
        ADD
      </button>

    </form>
  )
}