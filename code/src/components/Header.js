import React from 'react'
import moment from 'moment'

import styled from 'styled-components'
 
const Header = () => {
  const currentDate = moment().format("dddd, MMM Do");
  const currentTime = moment().format("LT");

  return (
    <HeaderContainer>
      <HeaderText>MY TASKS</HeaderText>
        <div>
          <DateTime>
            {currentDate} - {currentTime}
          </DateTime>
        </div>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
border-bottom: 2px solid #ffffff;
`
const HeaderText = styled.h1`
color: #ffffff;
font-size: 30px;
`
const DateTime = styled.p`
color: #ffffff;
`

