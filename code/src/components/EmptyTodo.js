import React from 'react'
import styled from 'styled-components'

const EmptyTodoWrapper = styled.div`
  border-top: solid #999 1px;
  position: relative;
  height: 330px;

  @media (min-width: 767px){
    height: 550px;
  }
`
const TextContainer = styled.div`
  width: 350px;
  padding-left: 22px; 

  @media (min-width: 767px){
    width: 560px;
    margin: auto;
  }
`
const Text = styled.p`
  font-size: 35px;
  font-weight: 300;

  @media (min-width: 767px){
    font-size: 65px;
    text-align: center;
  }
  @media (min-width: 1024px){
    font-size: 65px;
  }
`
const Bold = styled.span`
  font-weight: 600;
  font-style: italic;
`
const Animation = styled.div`
  width: 100%;  
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: -1;
  top: 130px;

  @media (min-width: 767px){
    top: 280px;
  }
`

const EmptyTodo = () => {

  return (
    <EmptyTodoWrapper>
      <TextContainer>
        <Text>
          You're all <Bold>done!</Bold> Have a coffee and <Bold>relax</Bold>
        </Text>
      </TextContainer>
      <Animation>
        <lottie-player 
          src='https://assets1.lottiefiles.com/packages/lf20_mGWpGF/55 - Coffee Mug.json'  
          background='transparent'  
          speed='0.8'  
          style={{width: '200px', height: '200px'}}
          loop  
          autoplay
        >
        </lottie-player>
      </Animation>
    </EmptyTodoWrapper>
  )
}

export default EmptyTodo
