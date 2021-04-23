import React from 'react'


const RemoveTodo = ({ onClickRemove }) => {


  return (
    <div>
      <button onClick={onClickRemove}>
        Delete
  </button>
    </div>
  )
}

export default RemoveTodo