import React from 'react'
import { Home } from './pages/Home'
import styled from 'styled-components'

export const App = () => {
  return (
    <AppContainer>
      <Home />
    </AppContainer>
  )
}

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
`
