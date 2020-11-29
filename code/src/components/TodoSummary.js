import React from 'react'

import { TodoItem } from './TodoItem.js'
import { TodoInput } from './TodoInput.js'
import { useSelector } from 'react-redux'

export const TodoSummary = () => {
  const list = useSelector(store => store.todos.list)

  const numDone = list.items.filter(item => item.done).length

  const date = new Date();
    const options = {day: 'numeric', month: 'short', year: 'numeric'};
    const todaysDate = date.toLocaleDateString('en-GB', options);

  return <section className="todo-summary">
    <h1 tabIndex="0">{todaysDate}</h1>
    <h2 tabIndex="0">
      {numDone}/{list.items.length} complete
    </h2>
  </section>
}
