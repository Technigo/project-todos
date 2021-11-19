import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const HeaderStyled = styled.header`
  background-image: url('/assets/bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  h1 {
    color: #fedd00;
    text-shadow: 1px 2px 2px #012f66;
  }

  span {
    background-color: #f7898e;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    color: #f5f9fb;
  }
`

const Header = () => {
  const amountQuests = useSelector((store) => store.quests.items.length)
  return (
    <HeaderStyled>
      <h1>
        My Quests <span>{amountQuests}</span>
      </h1>
    </HeaderStyled>
  )
}

export default Header
