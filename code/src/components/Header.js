import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 400px;
  height: 80px;
  display: flex;
  align-items: flex-end;
`
const StyledBigHeadline = styled.h1`
  color: white;
  font-weight: 700;
  font-size: 30px;
  margin: 0;
`

export const Header = () => {
  return (
    <StyledContainer>
      <StyledBigHeadline>What to-do next?</StyledBigHeadline>
    </StyledContainer>
  )
}
