import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'


const HeaderContainer = styled.h1`
  font-weight: normal;
  font-size: 1.25rem;
  color: #222;
  margin: 2rem;
`

export const Header = () => {
  const items = useSelector(store => store.todos.items)

  const numTotalItems = items.length
  const numCompletedIems = items.filter(item => item.isComplete).length

  return <HeaderContainer>
    All tasks &ndash; {numCompletedIems} of {numTotalItems} completed
  </HeaderContainer>
}
