import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { todos } from '../reducers/todos'
import { Item } from './Item.js'
import { ListContainer } from '../styledComponents/list'

export const List = () => {
  const dispatch = useDispatch()
  const todoItems = useSelector((store) => store.todos.list.todoItems)

  if (todoItems.length < 1) {
    dispatch(todos.actions.showList(false))
  }
   
    return (
      <ListContainer>
        {todoItems.map((item) => (
          <Item key={item.id} item={item}/>
        ))}
      </ListContainer>
    )
  
}