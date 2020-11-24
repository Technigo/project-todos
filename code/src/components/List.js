import React from 'react';
import { useSelector } from 'react-redux'

import { Item } from './Item.js'

export const List = () => {
  const todoItems = useSelector((store) => store.todos.list.todoItems)

  return (
    <>
    {todoItems.map((item, index) => (
      <Item key={index} itemIndex={index}/>
    ))}
    </>
  )
}