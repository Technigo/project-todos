import React from 'react'

import TaskCounter from './TaskCounter'

const TodoInformation = () => {
  return (
    <div className="todo-information-container">
      <h1 className="main-title">Todo</h1>
      <TaskCounter />
    </div>
  )
}

export default TodoInformation
