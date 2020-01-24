/* eslint-disable indent */
import React from 'react'
import { useSelector } from 'react-redux'
import { Item } from 'components/Item'

export const ItemList = () => {
  const items = useSelector((state) => state.todos.items)

    return (
      <ul>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
      </ul>
    )
}