import React from 'react'
import { useEffect, useState } from 'react'
import { TodoItem } from 'components/TodoItem'
import { TodoInput } from 'components/TodoInput'
import { TodoSummery } from 'components/TodoSummery'
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
