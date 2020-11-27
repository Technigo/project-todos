import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

export const Header = () => {
   
  
  return (
  <HeaderWrapper>
    <Text>Todos</Text>
    <Date>{moment().format("dddd MMM Do")}</Date>
    
  </HeaderWrapper>
  )
} 

const HeaderWrapper = styled.section`
width: 600px;
height: 100px;
background: #f1f1f1;
display: flex;
flex-direction: column;
align-items: center;
`

const Text = styled.text`
Font-size: 30px;
`
const Date = styled.text`
Font-size: 30px;
`