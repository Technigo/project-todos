import React from 'react'
import styled from 'styled-components'
import Image from './Todo.jpg'

export const Header = () => {

  return (
    <Wrapper>
      <HeaderImage />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 200px;
  display: flex;
  justify-content: center;
`

const HeaderImage = styled.img`
  background-image: url(${Image}); 
  width: 100%; 
  margin: 0;
  padding: 0;
  height: 200px;
  resize-mode: contain;
  scale: fit;
  background-size: cover;
  bottom: 200px;
`