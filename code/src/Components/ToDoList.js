import React from 'react'
import { ToDoItem } from './ToDoItem'
import { InputToDo } from './InputToDo'

export const ToDoList = () => {
  return (
    <div>
      TodoList
      < InputToDo />
      < ToDoItem />
    </div>
  )
}