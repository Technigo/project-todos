import React from 'react'

import styled from 'styled-components'

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  background-color: yellow;
  padding: 20px;
  width: 80%;
`
const TotalTasks = styled.p`
  font-size: 16px;
`

const ClearButton = styled.button`
  font-size: 16px;
`

export const Footer = () => {
  return (
    <Container>
      <TotalTasks>
        0/4 tasks completed
      </TotalTasks>
      <ClearButton
        onClick={() => {}}
      >
        Clear all
      </ClearButton>
    </Container>
  )
}