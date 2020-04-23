import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderToDo } from '../components/HeaderToDo'
import { ToDoList } from '../components/ToDoList'

export const ToDo = () => {

  return (
    <>
      <HeaderToDo />
      <Link to="/shopping">Shopping List =></Link>
      <ToDoList />
    </>
  )
}