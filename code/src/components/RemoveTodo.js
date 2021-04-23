import React from 'react'


const RemoveTodo = ({ onClickRemove }) => {


  return (
    <div className="remove-todo-container">
      <button onClick={onClickRemove}>
        <img src="./icons/icons8-full-trash-48.png" />
      </button>
    </div>
  )
}

export default RemoveTodo