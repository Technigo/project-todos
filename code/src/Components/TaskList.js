import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { TaskItem } from './TaskItem'
import { todo } from 'Reducers/todo'


export const TaskList = () => {
  const dispatch = useDispatch()
  const items = useSelector(store => store.todo.items)  
  
  return (
  <>
    {items.map((item, index) => (
      <TaskItem key={index} item={item.text}></TaskItem>
    ))}
      <button className="task-list-button" 
      onClick={() => dispatch(todo.actions.removeOne())}>
        Remove One
      </button>
  </>
  )
}

