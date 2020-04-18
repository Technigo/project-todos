import React from 'react'
import { TodoItem } from '../components/TodoItem'
import { TodoInput } from '../components/TodoInput'
import { useSelector } from 'react-redux'

export const TodoSummary = () => {
  const list = useSelector(store => store.todos.list)


  // count how many tasks are done using filter 
  const numDone = list.items.filter(item => item.done).length


  return (
    <section className="todo-summary">
      <h2>
        {numDone}/{list.items.length} are completed
      </h2>
    </section>
  )
}