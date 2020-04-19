import React from 'react'
import { useSelector } from 'react-redux'

export const ToDoItem = () => {

  const allItems = useSelector((store) => store.todoitem.items)
  console.log(allItems)

  //Add todoitems by mapping the items in the todolist in the store
  return (


    allItems.map(item => {
      return item.name
    })

  )
}