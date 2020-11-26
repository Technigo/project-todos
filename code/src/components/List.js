import React from 'react'
import { useSelector } from 'react-redux'

import { Item } from './Item.js'
import { ListContainer } from '../styledComponents/listElements'

export const List = () => {
  const todoItems = useSelector((store) => store.todos.list.todoItems)

  return (
      <ListContainer>
        {todoItems.map((item) => (
          <Item key={item.id} item={item}/>
        ))} {console.log(todoItems)}
      </ListContainer>
  )
}