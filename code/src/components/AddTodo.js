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
        <input
          className='input-field'
          type='text'
          placeholder='+ Add todo'
          value={todo}
          onChange={event => setTodo(event.target.value)}
        />
      </form>
    </div>
  )
}
