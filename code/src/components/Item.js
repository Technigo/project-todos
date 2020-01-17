import React from 'react'
import { todoList } from 'reducers/todoList'

export const Item = (props) => { 
  return (
  <li>{props.item.name}</li>
  )
}