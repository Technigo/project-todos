import React from "react"
import { useSelector } from "react-redux"
import { CompletedTodoItem } from "components/CompletedTodoItem"

export const CompletedTodoList = () => {
  const todoItems = useSelector(state => state.todoList.completedItems)

  return (
    <ul>
      {todoItems.map(item => (
        <CompletedTodoItem key={item.id} item={item} />
      ))}
    </ul>
  )
}
