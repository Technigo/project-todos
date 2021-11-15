import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import todo from '../reducers/todo'

const AddTodos = () => {
  const [input, setInput] = useState('')

  const dispatch = useDispatch()

  const onAddTodo = () => {
    dispatch(todo.actions.addTodo(input))
    setInput('')
  }

  return (
    <>
      <div className="addtodo-container">
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <div className="todo-days">
          <p> finish by: </p>
          <label>M</label>
          <input
            type="radio"
            className="days"
            //   checked={item.isComplete}
            //   onchange={() => onToggleTodo(item.id)}
          />
          <label>T</label>
          <input
            type="radio"
            className="days"
            //   checked={item.isComplete}
            //   onchange={() => onToggleTodo(item.id)}
          />
          <label>W</label>
          <input
            type="radio"
            className="days"
            //   checked={item.isComplete}
            //   onchange={() => onToggleTodo(item.id)}
          />
          <label>T</label>
          <input
            type="radio"
            className="days"
            //   checked={item.isComplete}
            //   onchange={() => onToggleTodo(item.id)}
          />
          <label>F</label>
          <input
            type="radio"
            className="days"
            //   checked={item.isComplete}
            //   onchange={() => onToggleTodo(item.id)}
          />
        </div>
      </div>
      <button className="add-btn" onClick={onAddTodo}>
        Add todo
      </button>
    </>
  )
}

export default AddTodos
