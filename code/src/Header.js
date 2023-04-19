import React from 'react'
import styled from 'styled-components'

export const Header = () => {
  return (
    <HeaderSection>
      <h1>Get your stuff together</h1>
    </HeaderSection>
  )
}

const HeaderSection = styled.section`
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
background-color: black;
color: white;
font-family: 'Courier New';
`

