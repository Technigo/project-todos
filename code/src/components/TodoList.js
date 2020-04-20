import React from 'react'
import { TodoItem } from '../components/TodoItem'
import { TodoInput } from '../components/TodoInput'
import { TodoSummary } from '../components/TodoSummary'
import { useSelector } from 'react-redux'
import { EmptyList } from '../components/EmptyList'
import { todos } from '../reducers/todos'
import '../styling/todo-list.css'
import '../styling/todo-item.css'

export const TodoList = () => {
  // get list information from this list from the store
  const list = useSelector(store => store.todos.list)

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