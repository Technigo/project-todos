import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todoList } from 'reducers/todoList'
import { Form } from 'components/styles'

export const AddTodo = () => {
  const [todo, setTodo] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = event => {
    event.preventDefault()
    dispatch(todoList.actions.addTodo(todo))
    setTodo("")
  }

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        +
        <input
          type="text"
          value={todo}
          onChange={event => setTodo(event.target.value)}
        ></input>
      </label>
      <button type='submit'>Add</button>
    </Form>
  )
}