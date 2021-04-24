import React from 'react'

const TotalTodos = ({tasks, completedTodos}) => {

  return (
    <div>
      <p>Total tasks:{completedTodos.length}/{tasks.length} </p>
    </div>
  )
}


export default TotalTodos