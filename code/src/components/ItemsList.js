import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { Item } from "components/Item"

import { tasks } from "reducers/tasks"

// localStorage.setItem("tasks", JSON.stringify(objects))
// const storedTodos = JSON.parse(localStorage.getItem("tasks")) || []


import "./itemsList.css"

export const ItemsList = () => {
  const items = useSelector((state) => state.tasks.items)
  const dispatch = useDispatch()

  localStorage.setItem("tasks", JSON.stringify(items))
  const storedTodos = JSON.parse(localStorage.getItem("tasks")) || []
  // dispatch(tasks.actions.addTask(storedTodos))

  return (
    <ul>
      {storedTodos.map((item) => (
        <Item key={item.id} item={item} />
      ))

      }
    </ul>

  )
}