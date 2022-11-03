import React from 'react';
import styled from 'styled-components/macro'

const Header = () => {
/*   const dateObj = new Date()
  const weekday = dateObj.toLocaleString('default', { weekday: 'long' }) */

  const arrayOfWeekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  const dateObj = new Date()
  const weekdayNumber = dateObj.getDay()
  const weekdayName = arrayOfWeekdays[weekdayNumber]

  return (
    <HeaderContainer>
      <StyledHeading>{weekdayName}</StyledHeading>
      <StyledLine />
    </HeaderContainer>
  )
}

const HeaderContainer = styled.section`
  margin: 3vh;
`

const StyledLine = styled.hr`
  margin: 0;
  color: red;
`

const StyledHeading = styled.h2`
  font-family: var(--font-main);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  text-align: center;
  font-size: 20px;
  padding-bottom: 2vh;
  color: var(--color-accent);
`

export default Header;