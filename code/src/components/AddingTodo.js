import React, { useState } from "react"
import { useDispatch } from "react-redux"

import { todos } from "reducers/todos"
import './style/Adding.css'
// import { TimeRange } from "./TimeRange"


export const AddingTodo = ({ todoId }) => {
  const dispatch = useDispatch()

  const [postNew, setPostNew] = useState('')
  // const [category, setCategory] = useState('')
  

  const handleSubmit = event => {
    event.preventDefault()

    dispatch(
      todos.actions.addTodo({
        todoId: todoId,
        todoInfo: { text: postNew, complete: false }
      })
    )
    setPostNew('')
    // setCategory('')
  }

  // User input for todo list
  return (
    <form className="addInput" onSubmit={handleSubmit}>
      <div className="addingTodo" >
        <textarea type="text" required
          value={postNew}
          placeholder="What To Do?"
          onChange={(event) =>
            setPostNew(event.target.value)} />

        <button type="submit"
          disabled={postNew.length === 0}>
          ADD
      </button>
      </div>
      {/* <TimeRange /> */}
      {/* <label>
        <select value={category}
        onChange={(event) => 
          setCategory(event.target.value)}>
            <option value="Other">Other</option>
            <option value="Home">Home</option>
            <option value="Work">Work</option>
        </select>
      </label> */}
    </form>
  )
}