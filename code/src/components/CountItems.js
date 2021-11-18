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
      <p>
        <span className="number-total">{counter}</span> tasks total
      </p>
      <p>
        <span className="number-complete">{completedTasks}</span> completed
      </p>
    </div>
  )
}
