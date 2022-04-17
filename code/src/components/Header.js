import React from 'react'
import moment from 'moment'
import styled from 'styled-components/macro'

const StyledHeader = styled.header`
  font-family: 'Permanent Marker', cursive;
  background-color: teal;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
      margin: 10px;
  }
`

const Header = () => {

    const today = moment().format('dddd MMMM Do YYYY')

    return (
        <StyledHeader>
            <h1>To Do!</h1>
            <p>{today}</p>
        </StyledHeader>
    )
}

export default Header