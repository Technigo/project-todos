import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ItemText } from './ItemText'

export const ToDoItem = () => {

  const allItems = useSelector((store) => store.todoitem.items)
  
  return (
    allItems.map(item => {
      return (
        < ItemText item={item}/>
      )
    })

  )
}