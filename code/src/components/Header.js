import React from 'react'
import { format } from 'date-fns'
import styled from 'styled-components'

import { TodosDone } from './TodosDone'

const HeaderWrapper = styled.section`
  border: solid 1px #b67764;
  padding: 20px;
`
const DateWrapper = styled.div`
  padding:5px;
  align-items:center;
`
const DateText = styled.p`
  margin:5px;
  text-align:center;
`
const DateHeader = styled.h3`
  text-align: center;
`

const today = new Date()

export const Header = () => {
  return (
    <HeaderWrapper>
      <h1>My daily Todo's ✍️ </h1>
      <DateWrapper>
        <DateHeader>
          {format(new Date(), "cccc").toUpperCase()}
        </DateHeader>
        <DateText>
          <span> {format(new Date(), "LLLL d")}</span></DateText>
          <DateText>{format(new Date(), "yyyy")}</DateText>
      </DateWrapper>
        <TodosDone />
    </HeaderWrapper>
  )
}