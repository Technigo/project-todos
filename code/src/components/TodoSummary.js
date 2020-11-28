import React from 'react'

import { TodoItem } from './TodoItem.js'
import { TodoInput } from './TodoInput.js'
import { useSelector } from 'react-redux'

export const TodoSummary = () => {
  const list = useSelector(store => store.todos.list)

  const numDone = list.items.filter(item => item.done).length

  return <section className="todo-summary">
    <h2>
      0/{list.items.length} task complete
    </h2>
  </section>
}
