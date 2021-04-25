import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

const TopHeader = styled.header`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px;
  background-color: #8B98F9;
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  border-bottom: 1px solid #A9A4A6;

  @media (min-width: 998px) {
  }
` 

const TopHeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    width: 80%;
  }

  @media (min-width: 998px) {
    width: 50%;
  }
`

const ListInfo = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

const ListHeading = styled.h2`
  margin: 0;
`

const Date = styled.p`
  
`

const Header = () => {
  const today = moment().format('MMMM Do')
  const weekday = moment().format('dddd')
  
  return (
    <TopHeader>
      <TopHeaderWrapper>
        <ListInfo>
          <ListHeading>{weekday}</ListHeading>
          <Date>{today}</Date>
        </ListInfo>
      </TopHeaderWrapper>
    </TopHeader>
  )
}

export default Header