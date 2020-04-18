import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'

export const AddTask = () => {

  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(todos.actions.addTodo({
      newTask: {
        text: inputValue,
        completed: false
      }
    }))
    setInputValue('')
  }


  return (
    <form className="add-task" onSubmit={submitHandler}>
      <input
        type="text"
        onChange={e => setInputValue(e.target.value)}
        value={inputValue}
        minLength="2"
        placeholder="Add task"
        required
      />
      <input type="submit" className="add-btn" value="Add" />
    </form>
  )
}