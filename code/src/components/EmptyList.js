import React from 'react'
import styled from 'styled-components/macro'

const EmptyList = () => {
  return (
    <EmptyListContainer>
      <h3>Relax! You don&rsquo;t have any tasks to do right now.</h3>
    </EmptyListContainer>
  )
}

const EmptyListContainer = styled.h3`
  font-family: var(--font-main);
  font-weight: 600;
  text-align: center;
  font-size: 18px;
  color: var(--color-accent);
  margin: 10vw 10vh;
`

export default EmptyList;