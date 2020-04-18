import React from 'react'
import { useSelector } from 'react-redux'
import { Task } from './Task'

export const Tasks = () => {
  const todosList = useSelector((store) => store.todos.items)

  return (
    <div className="tasks">
      <div className="task">
        {todosList.map((todo, index) => (
          <Task
            key={index}
            itemIndex={index}
            text={todo.text} />
        ))}
      </div>
    </div>
  )
}

