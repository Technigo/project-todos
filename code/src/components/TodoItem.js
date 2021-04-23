import React from 'react'

const TodoItem = ({ decription, checkComplete, onChangeToggle }) => {
  return (
    <>
      <div className="container">
        <div className="round">

          <input
            id="checkbox"
            type="checkbox"
            checked={checkComplete}
            onChange={onChangeToggle}
          />
          <label htmlFor="checkbox"></label>


        </div>
      </div>
      <p>{decription}</p>
    </>
  )
}

export default TodoItem