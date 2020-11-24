import React from "react"
import { useSelector } from "react-redux"

import { SingleTodo } from "./SingleTodo"
import { todoTasks } from "reducer/todoTasks"

export const TodoList = () => {
  // TODO:
  // nr of all todos: lenghts of allTodoTasks array

  // store =
  // {
  //   todoTasks: {
  //     allTodoTasks: [
  //       {
  //         id: 1,
  //         text: 'Watch video on actions & reducers',
  //         complete: false
  //       },
  //       {
  //         id: 2,
  //         text: 'Follow redux codealong',
  //         complete: false
  //       },
  //       {
  //         id: 3,
  //         text: 'Fork weekly assignment',
  //         complete: false
  //       },
  //       {
  //         id: 4,
  //         text: 'Create a todo app',
  //         complete: false
  //       }
  //     ]
  //   }
  // }

  //fetch all tasks from the store
  const tasks = useSelector((store) => store.todoTasks.allTodoTasks)
  console.log(`Printing allTodoTasks ${todoTasks.allTodoTasks}`)

  return (
    <ul>
      {tasks.map((task) => (
        <SingleTodo key={task.id} {...task} />
      ))}
    </ul>
  )
}

