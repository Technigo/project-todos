import React from 'react'
import { useSelector } from 'react-redux'

import TodoItem from './TodoItem'

const TodoList = () => {
  const items = useSelector((store) => store.todos.items)
  return (
    <div className="todo-list">
      {items.map((todo) => (
        <TodoItem {...todo} key={todo.id} />
      ))}
    </div>
  )
}

export default TodoList
