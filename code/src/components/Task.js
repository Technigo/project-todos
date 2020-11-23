import React from 'react'

export const Task = ({id, text, complete}) => {
  return (
    <div className="task-container">
      <input
        type="radio"
        name="task"
        id={id}
      />
      <label
        className="task-text"
        htmlFor={id}
      >
        {text}
      </label>
    </div>
  )
}