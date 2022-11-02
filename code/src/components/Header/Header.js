/* eslint-disable linebreak-style */

import React from 'react'
import { AddNewTask } from 'components/AddNewTask/AddNewTask'
import { HeaderStyled } from './Header.styles'

export const Header = () => {
  return (
    <HeaderStyled>
      <h1>.Chores</h1>
      <AddNewTask />
    </HeaderStyled>
  )
}