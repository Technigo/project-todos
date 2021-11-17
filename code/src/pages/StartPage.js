import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const StyledHeader = styled.h1`
  color: red;
`

const StartPage = () => {
  return (
    <StyledMain>
      <StyledHeader>My ToDo-List</StyledHeader>
      <img src='/assets/noTasks-pic.png' alt='example' />
      <Link to='/tasks'>
        <button>Start adding your ToDos</button>
      </Link>
    </StyledMain>
  )
}

export default StartPage
