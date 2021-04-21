import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import tasks from '../reducers/tasks'

const HeaderWrapper = styled.section`
  background-color: #6c757d;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
`

const Heading = styled.h1`
  padding: 15px;
  margin: 0;
  margin-top: 10px;
`

const BottomWrapper = styled.div`
  display: flex;
`

const TaskCount = styled.p`
  font-size: 14px;
  margin: 0;
  margin-bottom: 20px;
`
const ClearButton = styled.button`
  border: none;
  background-color: white;
  font-size: 14px;
  color: #6c757d;
  height: 20px;
  margin-left: 10px;
`

export const Header = () => {
  const items = useSelector((store) => store.tasks.items)
  const itemsCompleted = items.filter(items => items.isCompleted)

  const dispatch = useDispatch()

  return (
    <HeaderWrapper>
      <Heading>WHAT'S ON MY TODO?</Heading>
      <BottomWrapper>
        <TaskCount>{itemsCompleted.length} / {items.length} tasks completed</TaskCount>
        <ClearButton onClick={() => dispatch(tasks.actions.clearAll())}>Clear all</ClearButton>
      </BottomWrapper>
    </HeaderWrapper>
  )
}