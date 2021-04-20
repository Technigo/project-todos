import React from 'react'
import styled from 'styled-components'

import { useSelector } from 'react-redux'

const HeaderWrapper = styled.section`
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Heading = styled.h1`
  padding: 15px;
  margin: 0;
`

const TaskCount = styled.p`
  font-size: 14px;
  margin: 0;
  margin-bottom: 10px;
`

export const Header = () => {
  const itemsCount = useSelector((store) => store.tasks.items.length)
  const checkedCount = useSelector((store) => store.tasks.items.isCompleted)

  return (
    <HeaderWrapper>
      <Heading>WHAT'S ON MY TODO?</Heading>
      <TaskCount>{checkedCount} / {itemsCount} tasks completed</TaskCount>
    </HeaderWrapper>
  )
}