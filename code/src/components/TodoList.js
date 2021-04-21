import React from 'react'
import { useSelector } from 'react-redux'

import TodoItem from './TodoItem'
import NewTodo from './NewTodo'

const TodoList = () => {
  const items = useSelector((store) => store.tasks.items)

  return (
    <section>
      <NewTodo />
      {items.map(item => (
        <TodoItem 
          id={item.id}
          text={item.text}
          complete={item.complete}
          created={item.created}
          editMode={item.editMode}
        />
      ))}
    </section>
  )
}

export default TodoList