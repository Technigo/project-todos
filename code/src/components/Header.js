import React from 'react'
import { Summary } from './Summary'

import './style/Header.css'

export const Header = () => {

  return (
    <div className='header-container'>
      <h1>ToDo</h1>
      <Summary />
    </div>
  )
}