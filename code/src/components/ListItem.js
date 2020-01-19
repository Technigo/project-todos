import React from 'react'
import { useSelector } from 'react-redux'
import { Item } from 'components/Item'
import './listitem.css'

export const ListItem = () => {
  const items = useSelector((state) => state.todoList.items)
  return (
    <ul className="list">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  )
}