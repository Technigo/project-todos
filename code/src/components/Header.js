import React from 'react'
import styled from 'styled-components'

import TaskCount from './TaskCount'
import ClearTodo from './ClearTodo'


const HeaderWrap = styled.header`
  background-color: #2189e5;
  border-radius: 25px 25px 0 0;
  padding: 5px 10px;
  color: #fff;
  font-size: 18px;
  display: flex;
  flex-direction: column;
`

const Flexbox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0 10px 0; 
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
      <CurrentDate>19th Apr, 2021</CurrentDate>
      <Flexbox>
        <TaskCount />
        <ClearTodo />
      </Flexbox>
    </HeaderWrap>
  )
}

export default Header