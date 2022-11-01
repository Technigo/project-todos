import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NeedToDoRed } from 'reducers/NeedToDoRed'

export const AddTask = () => {
  const [input, setInput] = useState('')

  const dispatch = useDispatch()

  const onAddTask = () => {
    dispatch(NeedToDoRed.actions.addTask(input))
    setInput('')
  }

  return (
    <section className="add">
      <div className="add-header">
        <div className="create-text">
          <h3>Add a new task</h3>
        </div>
      </div>
      <div className="add-task-container">
        <input
          type="text"
          className="add-input"
          value={input}
          onChange={(event) => setInput(event.target.value)} />
        <button
          type="button"
          className="add-button"
          onClick={onAddTask}> ➕
        </button>
      </div>
    </section>
  )
}