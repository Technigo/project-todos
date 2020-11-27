import React from "react"
import { useSelector } from "react-redux"

export const TaskSummary = () => {
  const items = useSelector((state) => state.todo.items)
  const completedTasks = items.filter((item) => item.isComplete).length

  return (
    <>
      {" "}
        <span className="task-quantity" tabindex="0">
          {completedTasks}/{items.length} Done
        </span>
    </>
  )
}