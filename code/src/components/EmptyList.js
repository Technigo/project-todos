import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { ReactComponent as Swallows } from '../assets/swallows.svg'

export const EmptyList = () => {
  const items = useSelector((store) => store.todos.items)

  const startText = () => {
    if (items.length) {
      return 'none'
    }
  }

  return (
    <>
      <StyledStartText style={{ display: startText() }}>
        No to-dos today?
      </StyledStartText>
      <Swallows />
    </>
  )
}

const StyledStartText = styled.p`
  font-size: 25px;
  line-height: 1.3;
  font-weight: 300;
  color: white;
  width: 80%;
`
