import React from "react"
import { useSelector } from "react-redux"

import { TaskItem } from "./TaskItem"
import { ClearButton } from "../Library/ClearButton"

export const TaskList = () => {
  const items = useSelector((store) => store.todo.items)

  return (
    <ul>
      {items.map((item) => (
        <TaskItem key={item.id} item={item.text}>
          {" "}
        </TaskItem>
      ))}

      <ClearButton></ClearButton>
    </ul>
  )
}
