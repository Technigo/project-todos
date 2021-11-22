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
      <div className="addtodos-wrapper">
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && onAddTodo()}
        />
        <button disabled={input < 1} className="add-todo" onClick={onAddTodo}>
          Add todo
        </button>
      </div>
    </>
  )
}

export default AddTodos
