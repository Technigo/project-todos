import React from "react"
import { useSelector } from "react-redux"

export const TaskSummary = () => {
  const items = useSelector((state) => state.todo.items)
  const completedTasks = items.filter((item) => item.complete === true)

  return (
    <>
      {" "}
      {items.length !== 0 && (
        <span className="task-quantity">
          {completedTasks.length}/{items.length} Done
        </span>
      )}
    </>
  )
}