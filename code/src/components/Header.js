import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

export const Header = () => {
   const date= moment().format("dddd MMM Do") 
  
  return (
  <HeaderWrapper>
    <Text>Todos</Text>
    <Date>{date}</Date>
    
  </HeaderWrapper>
  )
} 

const HeaderWrapper = styled.section`
width:500px;
height: 100px;
background: #f1f1f1;
display: flex;
justify-content: center;
align-items: center;
align-items: center;
padding: 10px;
opacity:0.5;
`

const Text = styled.p`
Font-size: 30px;
font-weight: bold;
`
const Date = styled.p`
Font-size: 20px;
margin-left: 20px;
`