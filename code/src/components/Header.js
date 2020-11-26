import React from 'react';

import { useDispatch, useSelector } from 'react-redux'
import { todos } from '../reducers/todos'
import logo from '../assets/logo.svg'

import './header.css'

export const Header = () => {
  const dispatch = useDispatch()
  // Store the task text in the state variable. 

  const removeCompleted = () => {
    dispatch(
      todos.actions.removeCompleted("Hello")
    )
  }

  return (
    <header className="header">
      <img src={logo}></img>
      {/* <button onClick={removeCompleted}>Remove done</button> */}
    </header>
  )
}