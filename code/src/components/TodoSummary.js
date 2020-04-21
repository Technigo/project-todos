import React from 'react'
import { useSelector } from 'react-redux'


export const TodoSummary = () => {
  const tasks = useSelector((state) => state.todos.items)
  const tasksDone = tasks.filter((task) => task.taskComplete).length
  return (
    <>
      <h1>In my list I have {tasks.length} todos.</h1>
      <h2>I have {tasksDone} todos left todo.</h2>
    </>
  )
}