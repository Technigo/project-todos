import React from 'react';

import { useSelector, useDispatch } from 'react-redux'
import { Item } from './Item'

import { todos } from 'reducers/todos'

import './list.css'

export const List = () => {
  const dispatch = useDispatch()

  const items = useSelector(store => store.todos.items)

  return (
    <div className="list-container">
      {items.map((item, index) => (
        <Item
          key={index}
          index={index}
          isDone={item.isDone}
          text={item.text}>
        </Item>
      ))}
      <button 
        onClick={() =>  dispatch(todos.actions.removeOne())}>Remove one</button>
    </div >
  )
}