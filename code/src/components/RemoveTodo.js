import React from 'react'

import assets from '../assets/icons/icons8-full-trash-48.png'

const RemoveTodo = ({ onClickRemove }) => {
  return (
    <div className="remove-todo-container">
      <button onClick={onClickRemove}>
        <img src={assets} alt="recycle-bin" />
      </button>
    </div>
  )
}

export default RemoveTodo
