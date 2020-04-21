import React from 'react'
import { useSelector } from 'react-redux'
import { TodoSummary } from './TodoSummary'
import { TodoInput } from './TodoInput'
import { TodoItem } from './TodoItem'


export const TodoList = () => {
  // Fetch all tasks from the store, "state" is the "store"
  const allTodos = useSelector((state) => state.todos.items)
  console.log(allTodos)
  return (
    <ul>
      {allTodos.map((task) => (
        <TodoItem key={task.id} task={task} />
      ))}
    </ul>
  )
}

{/* {{ <section className="todo-list">
<TodoSummary></TodoSummary>
<TodoInput></TodoInput>
<TodoItem></TodoItem>
</section>}} */} 