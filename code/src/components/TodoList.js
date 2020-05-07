import React from 'react'
import { TodoItem } from 'components/TodoItem'
import { useSelector } from 'react-redux'

export const TodoList = () => {

  const list = useSelector(store => store.todos.list)

  return (
    <section className='todo-list'>
      {list.items.map((item, index) => (
        <TodoItem itemIndex={index}></TodoItem>
      ))
      }
    </section >
  )
}
