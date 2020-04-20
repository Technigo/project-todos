import React from 'react'
import { useSelector } from 'react-redux'
import { Item } from './Item'

export const ItemsList = () => {
  // Get all todos from store
  const todosList = useSelector((store) => store.todos.items)

  return (
    <div className="items-list">
      {todosList.map((todo, index) => (
        <Item
          key={index}
          itemIndex={index}
          text={todo.text} />
      ))}
    </div>
  )
}

