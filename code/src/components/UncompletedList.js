import React from "react"
import { useSelector } from "react-redux"
import { UncompletedItem } from "components/UncompletedItem"

export const UncompletedList = () => {
  const todoItems = useSelector(state => state.todoList.items)

  return (
    <ul>
      {todoItems.map(item => (
        <UncompletedItem key={item.id} item={item} />
      ))}
    </ul>
  )
}
