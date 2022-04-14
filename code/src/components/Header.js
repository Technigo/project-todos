import React from 'react'
import styled from "styled-components/macro"

const HeaderSection = styled.header`
display: flex;
flex-direction: column;
max-width: 600px;
margin: 10px 20px;
padding: 10px;
/* padding: 20px 0 10px 0; */
border: 2px solid red;
border-radius: 5px;
background: #fff;
text-align: center;

& h1 {
  margin: 0;
  text-transform: uppercase;
}
`

const Header = () => {
  return (
    <HeaderSection>
      <h1>Moody todos</h1>
    </HeaderSection>
  )
}

export default Header
