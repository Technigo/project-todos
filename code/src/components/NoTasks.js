import React from 'react'

import styled from 'styled-components'

import Logo from './assets/relax.png'

export const NoTasks = () => {
  return (
   <Container>
     <Image
      src={Logo}
      alt="clouds"
     />
     <Title>
       just relax, you have nothing to do right now. 
     </Title>
     <Text>
       create your daily to do list by adding new tasks below.
     </Text>
   </Container>
  )
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0 20px 0;

  @media (max-width: 280px) {
    padding: 10px 0 10px 0;
  }
`
const Image = styled.img`
  width: 150px;
  height: 150px;

  @media (min-width: 768px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 280px) {
    width: 120px;
    height: 120px;
  }
`
const Title = styled.h2`
  font-size: 22px;
  font-weight: 400;
  margin: 10px 0;
  text-align: center;
  color: #a986ad;
  max-width: 300px;

  @media (min-width: 768px) {
    font-size: 26px;
  }

  @media (max-width: 280px) {
    font-size: 18px;
  }
`
const Text = styled.p`
  font-size: 18px;
  margin: 0 0 10px 0;
  text-align: center;
  color: #a986ad;
  max-width: 300px;

  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 280px) {
    font-size: 14px;
  }
`