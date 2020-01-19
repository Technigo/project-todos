import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { todoList } from "reducers/todoList"

export const AddTodo = () => {
  const [todo, setTodo] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = event => {
    event.preventDefault()
    dispatch(todoList.actions.addTodo(todo))
    setTodo("")
  }

  return (
    <div className='add-todo'>
      <form onSubmit={handleSubmit}>
        <label>
          +
          <input
            className='input-field'
            type='text'
            value={todo}
            onChange={event => setTodo(event.target.value)}
          />
        </label>
        {/* <button type='submit'>Add todo</button> */}
      </form>
    </div>
  )
}
