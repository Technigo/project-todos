import React from 'react'
import { useSelector } from 'react-redux'

const TaskCounter = () => {
  const items = useSelector((store) => store.todos.items)
  const completedItems = items.filter((singleTodo) => singleTodo.isComplete)

  return (
    <h2 className="task-counter">
      You have completed {completedItems.length} / {items.length} tasks
    </h2>
  )
}

export default TaskCounter
