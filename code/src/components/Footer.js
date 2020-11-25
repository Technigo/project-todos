import React from 'react'
import { useSelector } from 'react-redux'

import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
const TotalTasks = styled.p`
  font-size: 16px;
`

const ClearButton = styled.button`
  font-size: 18px;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 300;
  background-color: #ffffff;
  border: none;
  transition: 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }

  &:focus {
    outline: 2px solid #9576A5;
  }
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
        clear all
      </ClearButton>
    </Container>
  )
}