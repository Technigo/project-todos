import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'


const HeaderContainer = styled.h1`
`


export const Header = () => {

  const username = useSelector(store => store.todos.username)
  const items = useSelector(store => store.todos.items)

  return <HeaderContainer>
    Hi! You have {items.length} things to do today!
  </HeaderContainer>
}