import React from 'react'
import { ToDoItem } from './ToDoItem'
import { InputToDo } from './InputToDo'
import { ToDoHeader } from './ToDoHeader'

export const ToDoList = () => {

  return (
    <div>
      < ToDoHeader />
      < InputToDo />
      <ul>
        < ToDoItem />
      </ul>
    </div>
  )
}