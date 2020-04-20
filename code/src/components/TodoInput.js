import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todos } from '../reducers/todos'
import '../styling/todo-input.css'
import DatePicker from 'react-date-picker'

// receive listId for input 
export const TodoInput = () => {
  const dispatch = useDispatch()

  // state for input from that comes from text box
  const [inputValue, setInputValue] = useState("")
  const [category, setCategory] = useState('')
  const [dueDate, setDueDate] = useState()

  // handle submit function to dispatch addTodo
  const handleOnSubmit = (e) => {
    e.preventDefault()

    // Dispatch the action to save the new todo item to list
    dispatch(
      todos.actions.addTodo({
        description: inputValue,
        done: false,
        category: category,
        date: dueDate
      })
    )

    // clear the fields after submit
    setInputValue("")
    setCategory("")
    setDueDate('')
  }

  return (
    <form className="todo-input" onSubmit={handleOnSubmit}>
      <input
        type="submit"
        className="todo-input-button"
        value="Add todo"
      ></input>
      <input
        type="text"
        placeholder="new todo..."
        className="todo-input-text"
        onChange={e => setInputValue(e.target.value)}
        value={inputValue}
      ></input>
      <label>
        Category:
          <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value=''>select...</option>
          <option value='work'>Work</option>
          <option value='event'>Event</option>
          <option value='school'>School</option>
          <option value='personal'>Personal</option>
        </select>
      </label>
      <label>
        Due Date
          <DatePicker onChange={(date) => setDueDate(date)} value={dueDate} />
      </label>
    </form >
  )
}