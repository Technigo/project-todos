import React from 'react'

const TodoItem = ({ decription, checkComplete, onChangeToggle }) => {
  return (
    <>
      <label className="checkbox">
        <input
          type="checkbox"
          checked={checkComplete}
          onChange={onChangeToggle}
        />
        <span className="checkmark"></span>
      </label>
      <p tabIndex="0">{decription}</p>
    </>
  )
}

export default TodoItem
