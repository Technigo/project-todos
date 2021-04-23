import React from 'react'

const TodoItem = ({ decription, checkComplete, onchangeToggle }) => {
  return (
    <div className="todo-container" >
      <p>{decription}</p>
      <input
        type="checkbox"
        checked={checkComplete}
        onChange={onchangeToggle}
      />
    </div>
  )
}

export default TodoItem