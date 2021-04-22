import React from 'react'
import { format } from 'date-fns'
import styled from 'styled-components'

import { TodosDone } from './TodosDone'

const HeaderWrapper = styled.section`
  border: solid 1px #b67764;
  margin: 10px;
  padding: 20px;
  width: 80%;
  text-align: center;
`
const HeaderText = styled.h1`
  font-family: 'Shadows Into Light', cursive;
  font-size: 40px;
  margin:15px;
`
const DateWrapper = styled.div`
  padding:5px;
  align-items:center;
  font-family: 'Mukta', sans-serif;
`
const DateText = styled.p`
  margin:0px;
  font-size: 20px;
`
const DateHeader = styled.h3`
  font-size: 30px;
  margin:0px;
`

const today = new Date()

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderText>My daily Todo's ✍️ </HeaderText>
      <DateWrapper>
        <DateHeader>
          {format(new Date(), "cccc").toUpperCase()}
        </DateHeader>
           <DateText>{format(new Date(), "d 'of' LLLL")}</DateText>
           <DateText>{format(new Date(), "yyyy")}</DateText>
      </DateWrapper>
        <TodosDone />
    </HeaderWrapper>
  )
}