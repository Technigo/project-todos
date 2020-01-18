import React from 'react'
import styled from 'styled-components'

export const Header = () => {

  return (

    <Wrapper>
      <HeaderText>TO DO</HeaderText>
    </Wrapper>

  )

}

const Wrapper = styled.section`
  background: black;
  height: 70px;
  padding: 20px;
  display: flex;
  justify-content: center;
`
const HeaderText = styled.text`
  color: white;
  font-size: 40px; 
`