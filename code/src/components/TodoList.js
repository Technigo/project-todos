import React from 'react'
import { useSelector } from 'react-redux'
import { TodoInput } from './TodoInput.js'
import { TodoItem } from './TodoItem.js'
import { TodoSummary } from './TodoSummary.js'

export const TodoList = () => {
  // Get list information for this list from the store
  const list = useSelector((store) => store.todos.list)

  // Show TodoInput + ecach TodoItem in the list + TodoSummary

  return (
    <section className="todo-list">
      <TodoInput />
      {
        list.items.map((item, index) => (
          <TodoItem itemIndex={index}></TodoItem>
        ))
      }
      <TodoSummary />
    </section>
  )
}