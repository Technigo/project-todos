import React from 'react'
import styled from 'styled-components/macro'

const StyledFooter = styled.footer`
  font-family: 'Permanent Marker', cursive;
  background-color: teal;
  text-align: center;
  p {
      font-size: 30px;
      padding: 10px;
      color: white;
  }
`

const Footer = () => {

    return (
        <StyledFooter>
            <p>Footer</p>
        </StyledFooter>
    )
}

export default Footer