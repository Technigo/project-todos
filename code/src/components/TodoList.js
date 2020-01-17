import React from "react"
import { useSelector } from "react-redux"
import { TodoItem } from "components/TodoItem"

export const TodoList = () => {
  const todoItems = useSelector(state => state.todoList.items)

  return (
    <ul>
      {todoItems.map(item => (
        <TodoItem key={item.id} item={item} />
      ))}
    </ul>
  )
}
