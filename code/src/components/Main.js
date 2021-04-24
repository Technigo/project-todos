import React from 'react'
import styled from 'styled-components'

import { useSelector } from 'react-redux'

import TaskList from './TaskList'
import { TaskForm } from './TaskForm'
import { EmptyState } from './EmptyState'

const MainWrapper = styled.main`
  background-color: #fffff;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Main = () => {
  const itemsLength = useSelector((store) => store.tasks.items.length)

  return (
    <MainWrapper>
      <TaskForm />
      {itemsLength === 0 ? <EmptyState /> : <TaskList />}
    </MainWrapper>
  )
}