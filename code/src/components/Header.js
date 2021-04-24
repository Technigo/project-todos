import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import moment from 'moment'

import { tasks } from '../reducers/tasks'

import CheckAllBtn from './CheckAllBtn'

const TopHeader = styled.header`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px;
  background-color: #F4F4F4;
  font-family: 'Montserrat', sans-serif;
  border-bottom: 1px solid #A9A4A6;

  @media (min-width: 998px) {
    justify-content: space-evenly;
  }
` 

const TopHeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 998px) {
    width: 50%;
  }
`

const ListInfo = styled.div`
  display: flex;
  flex-direction: column;
`

const ListHeading = styled.h2`
  margin: 0;
`

const Date = styled.p`
  
`

const Span = styled.span`
  text-align: right;
`

const Header = () => {
  const items = useSelector((store) => store.tasks.items)
  const completedItems = items.filter(items => items.complete).length

  const today = moment().format('MMMM Do')
  
  return (
    <TopHeader>
      <TopHeaderWrapper>
        <ListInfo>
          <ListHeading>To do</ListHeading>
          <Date>{today}</Date>
        </ListInfo>
        <ListInfo>
          <Span>{completedItems}/{items.length} tasks</Span>
          <CheckAllBtn />
        </ListInfo>
      </TopHeaderWrapper>
    </TopHeader>
  )
}

export default Header