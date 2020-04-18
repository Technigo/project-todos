import React from 'react'
import { TodoItem } from '../components/TodoItem'
import { TodoInput } from '../components/TodoInput'
import { TodoSummary } from '../components/TodoSummary'
import { useSelector } from 'react-redux'

export const TodoList = () => {
  // get list information from this list from the store
  const list = useSelector(store => store.todos.list)
  return (
    <section className="todo-list">
      <TodoInput />
      {list.items.map((item, index) => (
        <TodoItem itemIndex={index}></TodoItem>
      ))}
      <TodoSummary />
    </section>
  )
}