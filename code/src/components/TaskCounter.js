import React from "react"
import { useSelector } from "react-redux"

const TaskCounter = () => {
  const items = useSelector((store) => store.todos.items)
  const isChecked = items.filter((task) => task.isComplete)

  return <>Done! - {isChecked.length}</>
}

export default TaskCounter
