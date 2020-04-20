import React from 'react'
import { useSelector } from "react-redux"


export const TodoItem = ({ itemIndex }) => {

  const item = useSelector(store => store.todos.list.items[itemIndex])

  return <div className='todo-item'>{itemIndex}</div>

}