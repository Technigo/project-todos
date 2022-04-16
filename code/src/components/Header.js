import React from 'react'
import moment from 'moment'
import styled from 'styled-components'

const StyledHeader = styled.header`
  font-family: 'Permanent Marker', cursive;
  background-color: teal;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Header = () => {

    const today = moment().format('dddd MMMM Do YYYY')

    return (
        <StyledHeader>
            <h1>The Fantastic To Do App!</h1>
            <p>{today}</p>
        </StyledHeader>
    )
}

export default Header