import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { DateTime } from "luxon"

import tasks from '../reducers/tasks'

const TopWrapper = styled.section`
  background-color: #48cc94;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  color: white;
  margin-bottom: 20px;
  padding: 20px 30px;
  max-width: 100%;
  box-sizing: border-box;
`

const DateWrapper = styled.div`
  display: flex;
  justify-content: baseline;
`

const MonthYear = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const DateText = styled.p`
  margin: 0;
  font-size: 16px;
`

const Heading = styled.h1`
  padding: 15px;
  padding-left: 0;
  margin: 0;
  font-size: 45px;
  padding-right: 5px;
`

const BottomWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const TaskCount = styled.p`
  font-size: 14px;
  margin: 0;
  margin-bottom: 20px;
  color: #757575;
`
const ClearButton = styled.button`
  border: none;
  box-shadow: 0px 1px 3px rgba(0,0,0,0.3);
  background-color: white;
  font-size: 12px;
  color: #6c757d;
  height: 20px;
  margin-left: 10px;
  border-radius: 5px;
`

export const Header = () => {
  const items = useSelector((store) => store.tasks.items)
  const itemsCompleted = items.filter(items => items.isCompleted)

  const dispatch = useDispatch()

  const today = DateTime.now()

  return (
    <>
      <TopWrapper>
        <DateWrapper>
        <Heading>{today.setLocale('en-GB').toLocaleString({day: 'numeric'})}</Heading>
        <MonthYear>
          <DateText>{today.setLocale('en-GB').toLocaleString({month: 'short'}).toUpperCase()}</DateText>
          <DateText>{today.year}</DateText>
        </MonthYear>
        </DateWrapper>
        <DateText>{today.setLocale('en-GB').toLocaleString({weekday: 'long'}).toUpperCase()}</DateText>
      </TopWrapper>
      {items.length !== 0 && (
      <BottomWrapper>
        <TaskCount>{itemsCompleted.length} / {items.length} tasks completed</TaskCount>
        <ClearButton onClick={() => dispatch(tasks.actions.clearAll())}>Clear all</ClearButton>
      </BottomWrapper>
      )}
    </>
  )
}