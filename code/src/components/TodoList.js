import React from "react"
import { useSelector } from "react-redux"

import { SingleTodo } from "./SingleTodo"

export const TodoList = () => {
  // TODO:
  // nr of all todos: lenghts of allTodoTasks array

  //fetch all tasks from the store
  const tasks = useSelector(store => store.todoTasks.allTodoTasks)
  const nrOfTasks = tasks.length

  console.log(`Nr of all todos: ${nrOfTasks}`)

  return (
    <ul>
      {tasks.map((task) => (
        <SingleTodo
          key={task.id}
          id={task.id}
          text={task.text}
          complete={task.complete}
        />
      ))}
    </ul>
  )
}

