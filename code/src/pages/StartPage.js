import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

import Header from '../components/Header'
import Buttons from '../components/Buttons'

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const StyledImg = styled.img`
  width: 100%;
`


const StartPage = () => {
  return (
    <StyledMain>
      <Header />
      <StyledImg src='/assets/highFive.webp' alt='two women giving high five' />
      <Link to='/tasks'>
        <Buttons 
          text='Start planning'
        />
      </Link>
    </StyledMain>
  )
}

export default StartPage
