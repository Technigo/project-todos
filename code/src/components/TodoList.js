import React from 'react'
import { TodoItem } from './TodoItem'
import { useSelector } from 'react-redux'

export const TodoList = () => {

  const list = useSelector(store => store.todos.list) // jag bytte "todo" till "todos" för det är så du kallar det på andra ställen
  console.log("list", list)

  return (
    <section className='todo-list'>
      {list.items.map((item, index) => (
        <TodoItem itemIndex={index} />
      ))}
    </section>
  )
}