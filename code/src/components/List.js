import React from 'react';
import { useSelector } from 'react-redux'

import { Item } from './Item.js'
import { ListContainer } from '../styledComponents/containers'

export const List = () => {
  const todoItems = useSelector((store) => store.todos.list.todoItems)

  return (
    <ListContainer>
      {todoItems.map((item, index) => (
        <Item key={index} itemIndex={index}/>
      ))}
    </ListContainer>
  )
}