import React from 'react'
import { useSelector } from 'react-redux'

import styled from 'styled-components'

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  background-color: yellow;
  padding: 20px;
  width: 80%;
`
const TotalTasks = styled.p`
  font-size: 16px;
`

const ClearButton = styled.button`
  font-size: 16px;
`

export const Footer = () => {
  const items = useSelector(store => store.tasks.items)
  const completedItems = items.filter(item => item.complete)

  return (
    <Container>
      <TotalTasks>
        {completedItems.length}/{items.length} tasks completed
      </TotalTasks>
      <ClearButton
        onClick={() => {}}
      >
        Clear all
      </ClearButton>
    </Container>
  )
}