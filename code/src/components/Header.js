import React from "react"
import { useSelector } from "react-redux"
// import { tasks } from "reducers/tasks"

export const Header = () => {
  const items = useSelector((state) => state.tasks.items)
  const unCompleted = useSelector((state) => state.tasks.noOfUncompletedTasks)
  return (
    <header>
      <h1>To do</h1>
      Amount of todo's: {items.length}
      <br></br>
      Uncompleted todo's: {unCompleted}

      <br></br>
      <br></br>
    </header>
  )
}