import React, { useState } from 'react'
import { useSelector } from 'react-redux' //because we will have a action
import { tasks } from 'reducers/tasks'

export const TaskSummary = () => {

  const tasks = useSelector(state => state.tasks.tasks)
  const doMoreTasks = tasks.filter(task => task.completed)

  const [showShoppingList, setShowShoppingList] = useState(false)
  const buyMoreItems = tasks.filter(task => task.completed)

  return (
    <section>
      <h1>TOTAL {tasks.length} TASKS</h1>
      <h2>I NEED TO DO: {doMoreTasks.length} item{""}
        {doMoreTasks.length === 1 ? "." : "s."}
        <span onClick={() => setShowShoppingList(!showShoppingList)}> ➕ </span>
      </h2>

      {showShoppingList && (
        <ol>
          {buyMoreItems.map(task => (
            <li key={task.id}>{task.text}</li>
          ))}
        </ol>
      )
      }

    </section >
  )
}