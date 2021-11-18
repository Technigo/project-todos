import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

import Header from '../components/Header'
import { StartBtn } from '../components/Buttons'

const StyledMain = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const StyledImg = styled.img`
  width: 80%;
  margin-bottom: 50px;
`


const StartPage = () => {
  return (
    <StyledMain>
      <Header />
      <StyledImg src='/assets/toDo.webp' alt='two women giving high five' />
      <Link to='/tasks'>
        <StartBtn 
          text='Start planning'
        />
      </Link>
    </StyledMain>
  )
}

export default StartPage
