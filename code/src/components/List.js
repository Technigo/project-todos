import React from 'react';

import { useSelector } from 'react-redux'
import { Item } from './Item'
import { EmptyState } from './EmptyState'



import './list.css'

export const List = () => {
  const items = useSelector(store => store.todos.items)

  return (

    <main className="list-container">

      { items.length < 1 && 
        <EmptyState/>
      }
      {items.map((item, index) => (
        <Item
          key={index}
          index={index}
          isDone={item.isDone}
          text={item.text}>
        </Item>
      ))}
    </main >
  )
}