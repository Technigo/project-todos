import React from 'react'
import { useSelector } from 'react-redux'

import NoTodos from './NoTodos'
import TodoItem from './TodoItem'

const TodoList = () => {
  const items = useSelector((store) => store.todos.items)
  
  if (items.length === 0) {
    return <NoTodos />
  } else {
    return (
      <div className="todo-list">
        {items.map((todo) => (
          <TodoItem {...todo} key={todo.id} />
        ))}
      </div>
    )
  }
}

export default TodoList
