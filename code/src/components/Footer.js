import React from 'react'
import styled from 'styled-components/macro'

import Emoji from './Emoji'

const StyledFooter = styled.footer`
  font-family: 'Permanent Marker', cursive;
  background-color: var(--primary);
  text-align: center;
  p {
      font-size: 0.8rem;
      color: white;
  }
`

const Footer = () => {

    return (
        <StyledFooter>
            <p>Made by Jessica Sandler
                <br />
                Technigo Bootcamp
                &nbsp;
                <Emoji
                    symbol="🚀"
                    label="rocket" />
                &nbsp;
                Spring 2022
            </p>
        </StyledFooter>
    )
}

export default Footer