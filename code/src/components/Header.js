import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

const HeaderWrap = styled.header`
  background-color: #114e60;
  border-radius: 25px 25px 0 0;
  padding: 5px 10px;
  color: #f4eee8;
  font-size: 18px;
  display: flex;
  flex-direction: column;
`

const CurrentDate = styled.p`
  margin: 0 0 15px 0;
`

const Title = styled.h1`
  margin: 10px 0;
`

const Header = () => {
  return (
    <HeaderWrap>
      <Title>Things To Do</Title>
      <CurrentDate>{moment(new Date().toJSON()).format('MMMM Do YYYY')}</CurrentDate>
    </HeaderWrap>
  )
}

export default Header