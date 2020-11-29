import React from 'react';

import { useDispatch, useSelector } from 'react-redux'
import { todos } from '../reducers/todos'
import logo from '../assets/logo.svg'
import ic_delete from '../assets/ic_delete.svg'
import './header.css'
import './item.css'

export const Header = () => {
  const dispatch = useDispatch()
  // Store the task text in the state variable. 

  

  return (
    <header className="header">
      <img src={logo}></img>

      
    </header>
  )
}