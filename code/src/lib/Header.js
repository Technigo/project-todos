import React from 'react'
import { DateTimeNow } from './DateTimeNow.js'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'


export const Header = () => {
  const todos = useSelector(state => state.todos.todos)
  const list = useSelector(store => store.todos.list)

  return (
    <HeaderSection>
      <TotalTasks>
        Today you have {list.items.length} {list.items.length === 1 || list.items.length === 0 ? "task" : "tasks"}
      </TotalTasks>
      <DateTimeNow />
    </HeaderSection>
  )
}

const TotalTasks = styled.section`
  font-family: 'Manrope', sans-serif;
  text-align: center;
  font-size: 25px;
  color: #1C1740;
  background: transparent;
  padding: 20px;
  margin: 5px;
  font-weight: 800;
  text-transform: uppercase;
  margin-bottom: 10px;
`

const HeaderSection = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
`
