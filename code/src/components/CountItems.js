import React from "react"
import { useSelector } from "react-redux"

import "./todolist.css"

export const CountItems = () => {
  const counter = useSelector((store) => store.todos.items.length)

  const completedTasks = useSelector(
    (store) => store.todos.items.filter((item) => item.isComplete).length
  )

  return (
    <div className="item-counter">
      <p>{counter} tasks total</p>
      <p>{completedTasks} completed</p>
    </div>
  )
}
