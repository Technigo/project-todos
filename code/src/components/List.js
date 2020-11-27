import React from 'react'
import { useSelector } from 'react-redux'

import { Item } from './Item.js'
import { ListContainer } from '../styledComponents/list'
import { EmptyList } from './EmptyList.js'

export const List = () => {
  const todoItems = useSelector((store) => store.todos.list.todoItems)

  
  if (todoItems.length < 1) {
    return (
      <EmptyList />
    )
  } else {
  return (
      <ListContainer>
        {todoItems.map((item) => (
          <Item key={item.id} item={item}/>
        ))}
      </ListContainer>
  )
  }
}