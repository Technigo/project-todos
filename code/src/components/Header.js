import React from "react"
import styled from 'styled-components'

import { Counter } from "./Counter"
import { ClearButton } from "./ClearButton"

const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
`

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`

export const Header = () => {
  return (
    <Container>
      <h1>To do</h1>
      <StyledDiv>
        <ClearButton />
        <Counter />
      </StyledDiv>
    </Container>
  )
}