import React from 'react'
import styled from 'styled-components'
import { FaCocktail } from 'react-icons/fa'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
`

const Text = styled.p`
  font-size: 30px;
`

const EmptyState = () => {
  return (
    <Container>
      <FaCocktail 
        color="#ca8a8b" 
        size="50px" 
      />
      <Text>Woop! You have no todos!</Text>
    </Container>
  )
}

export default EmptyState