import React from 'react'
import styled from 'styled-components'

import { TaskCounter } from './TaskCounter'

const HeaderContainer = styled.div`
  padding: 15px;
`

const TodaysDate = styled.div`

`

const TopRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Header = () => {
  return (
    <HeaderContainer>
      <TopRow>
        <h1>TO-DO</h1>
        <TodaysDate>
          {new Date().toLocaleDateString("en-US", { day: "numeric", month: "short", weekday: "short" })}
        </TodaysDate>
      </TopRow>
      <TaskCounter />
    </HeaderContainer>
  )
}

