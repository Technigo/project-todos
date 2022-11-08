/* eslint-disable linebreak-style */

import React from 'react'
import { AddNewTask } from 'components/AddNewTask/AddNewTask'
import { HeaderStyled } from './Header.styles'
import monsterGif from '../../assets/monsterGif.gif'

export const Header = () => {
  return (
    <HeaderStyled>
      <div className="logoName">
        <img src={monsterGif} alt="monster" />
        <h1>TaskMonster</h1>
      </div>
      <AddNewTask />
    </HeaderStyled>
  )
}