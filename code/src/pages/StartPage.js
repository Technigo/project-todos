import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

import Header from '../components/Header'
import Image from '../components/Image'
import { StartBtn } from '../components/Buttons'

const StyledMain = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StartPage = () => {
  return (
    <StyledMain>
      <Header />
      <Image />
      <Link to='/tasks'>
        <StartBtn 
          text='Start planning'
        />
      </Link>
    </StyledMain>
  )
}

export default StartPage
