import React from 'react'
import { TodoList } from 'components/TodoList'
import { AddTask } from './AddTask'

export const Display = () => {
  return (
    <div className="wrapper">
      <div className="task">
        <AddTask />
      </div>
      <div className="card">
        <TodoList />
      </div>
    </div>

  )
}
