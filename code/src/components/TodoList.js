import React from 'react'
import { useSelector } from 'react-redux'
import { TodoSummary } from './TodoSummary'
import { TodoInput } from './TodoInput'
import { TodoItem } from './TodoItem'


export const TodoList = () => {
  // Fetch all tasks from the store
  const allTodos = useSelector((store) => store.todos)

  return (
    <section className="todo-list">
      <TodoSummary></TodoSummary>
      <TodoInput></TodoInput>
      <TodoItem></TodoItem>
    </section>
  )
}