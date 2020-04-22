import React, { useState } from "react"
import { useDispatch } from "react-redux"

import { todos } from "reducers/todos"
import './style/Adding.css'


export const AddingTodo = ({ todoId }) => {
  const dispatch = useDispatch()
  const [postNew, setPostNew] = useState('')
  
  //Will post user input
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

  // User input for to do-list
  return (
    <form className="addInput" onSubmit={handleSubmit}>
      <div className="addingTodo" >
        <textarea type="text" required
          value={postNew}
          placeholder="What To Do?"
          onChange={(event) =>
            setPostNew(event.target.value)} />

        <button type="submit"
          disabled={postNew.length < 3}>
          ADD
      </button>
      </div>
    </form>
  )
}