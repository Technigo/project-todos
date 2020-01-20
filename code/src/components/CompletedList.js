import React from "react"
import { useSelector } from "react-redux"
import { CompletedItem } from "components/CompletedItem"

export const CompletedList = () => {
  const todoItems = useSelector(state => state.todoList.completedItems)

  return (
    <ul>
      {todoItems.length > 0 && <h2>Completed todo</h2>}
      {todoItems.map(item => (
        <CompletedItem key={item.id} item={item} />
      ))}
    </ul>
  )
}
