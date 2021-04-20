import React from 'react'
import { useSelector } from 'react-redux'

import TodoThumb from './TodoThumb'


const TodoList = () => {
  const items = useSelector((store) => store.todo.items)

  return (
    <div className="list-container">
      {items.map((item) => <TodoThumb key={item.id} item={item} />)}

    </div>
  )
}

export default TodoList