import React from 'react'
import { useSelector } from 'react-redux'
import { Todo } from 'components/Todo'

export const TodosList = () => {
  const todos = useSelector((state) => state.todos.todosList)

  return (
    <div className="todos">
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} name={todo.name} id={todo.id} done={todo.done} />
        ))}
      </ul>
    </div>
  )
}