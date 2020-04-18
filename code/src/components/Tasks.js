import React from 'react'
import { useSelector } from 'react-redux'
import { Task } from './Task'

export const Tasks = () => {
  const todos = useSelector((store) => store.todos.items)

  return (
    <div className="tasks">
      <div className="task">
        {todos.map((todo, index) => (
          <Task
            key={index}
            text={todo.text} />
        ))}
      </div>
    </div>
  )
}

