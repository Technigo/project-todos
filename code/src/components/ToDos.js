import React from 'react'
import { useSelector } from 'react-redux'

const ToDos = () => {
  const tasks = useSelector((state) => state.todos)

  return (
    <div>
      {tasks.map((task) => (
        <div
          key={task.id}>{task.task}
          <input type='checkbox'></input>
        </div>
      ))}
    </div>
  )
}

export default ToDos
