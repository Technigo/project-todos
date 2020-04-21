import React, { useState } from 'react'
import { DateTimeNow } from './DateTimeNow.js'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'


export const Header = () => {
  const todos = useSelector(state => state.todos.todos)
  const list = useSelector(store => store.todos.list)

  return (
    <HeaderSection>
      <Subtitle>
        <h1>Today</h1>
        <DateTimeNow />
      </Subtitle>
      <div>
        <TotalTasks>
          {list.items.length} {list.items.length === 1 || list.items.length === 0 ? "task" : "tasks"}
        </TotalTasks>
      </div>
    </HeaderSection>

  )
}

const TotalTasks = styled.section`
  font-family: 'Manrope', sans-serif;
  text-align: center;
  font-size: 15px;
  color: #17AEBF;
  width: 10vh;
  background: transparent;
  padding: 20px;
  margin: 5px;
  font-weight: 600;
  text-transform: uppercase;
`


const HeaderSection = styled.section`
  display: flex;
  flex-direction: column;
`

const Subtitle = styled.section`
display: flex;
flex-direction: column;
color: black;
font-size: 25px;
font-family: 'Manrope', sans-serif;
margin-left: 10%;
`