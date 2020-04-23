import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../components/Header'
import { ToDoList } from '../components/ToDoList'

export const ToDo = () => {

  return (
    <>
    <Header />
    <Link to="/shopping">Shopping List =></Link>
    <ToDoList />
    </>
  )
}