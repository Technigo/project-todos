import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { tasks } from '../reducers/tasks'


export const TaskItem = ({ itemIndex }) => {

    // Get the item from the store based on the index
    // If index changes this entire component will re-render - important
  const item = useSelector((store) => store.tasks.list.items[itemIndex])









  return (
    <div className="todo-item">{itemIndex}</div>
  )
}