import React from 'react'
import styled from 'styled-components'

const NoToDos = () => {
  return(
    <NoTaskContainer>
      <NoTaskText>
        Let's plan a new trip!
      </NoTaskText>
      <lottie-player
        src="https://assets10.lottiefiles.com/packages/lf20_6wuFVO.json" 
        background="transparent" 
        speed="1"
        style={{width: '300px', height: '300px'}}
        loop
        autoplay>
      </lottie-player>
    </NoTaskContainer>
  )
}

export default NoToDos

const NoTaskContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;

width: 80%;
height: 320px;
margin: auto;
background-color: white;
padding: 10px;
 @media (min-width: 768px) {
  width: 60%;
 }
 @media (min-width: 1024px) {
  width: 40%;
 }
`
const NoTaskText = styled.h2`
font-family: 'Montserrat Alternates', sans-serif;
font-size: 20px;
font-weight: 200;
margin: auto;
`