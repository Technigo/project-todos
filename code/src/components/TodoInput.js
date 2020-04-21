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

    // Limit the chars to min 3 and max 140
    if (inputValue.length > 3 && inputValue.length < 140) {
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

    else {
      return alert('OOPS! Chars must be min 3 and max 140')
    }
  }

  return (
    <form className="todo-input" onSubmit={handleOnSubmit}>
      What's cooking?
      <input
        type="text"
        className="todo-input-text"
        onChange={e => setInputValue(e.target.value)}
        value={inputValue}
      ></input>

      <div class="category-duedate">
        <label>
          Due Date:
          <DatePicker onChange={(date) => setDueDate(date)} value={dueDate} />
        </label>

        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value=''>Category...</option>
          <option value='work'>Work</option>
          <option value='event'>Event</option>
          <option value='school'>School</option>
          <option value='personal'>Personal</option>
        </select>
      </div>
      <input
        type="submit"
        className="todo-input-button"
        value="Add todo"
      ></input>
    </form>
  )
}