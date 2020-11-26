import React from 'react'

import styled from 'styled-components'

import Logo from './assets/relax.png'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0 20px 0;
`
const Image = styled.img`
  width: 200px;
  height: 200px;
`
const Title = styled.h2`
  font-size: 22px;
  margin: 10px 0;
  text-align: center;
  color: #a986ad;
  max-width: 300px;
`
const Text = styled.p`
  font-size: 16px;
  margin: 0 0 10px 0;
  text-align: center;
  color: #a986ad;
  max-width: 300px;
`

export const NoTasks = () => {
  return (
   <Container>
     <Image
      src={Logo}
      alt="clouds"
     />
     <Title>
       just relax, you have nothing to right now. 
     </Title>
     <Text>
       create your daily to do list by adding new tasks below.
     </Text>
   </Container>
  )
}