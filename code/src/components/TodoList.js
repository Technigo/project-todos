import React from 'react'

import { TodoInput } from './TodoInput'
import { TodoItem } from './TodoItem'
import { TodoSummary } from './TodoSummary'
import { useSelector } from 'react-redux'

export const TodoList = () => {
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
