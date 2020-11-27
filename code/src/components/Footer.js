import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { tasks } from 'reducers/tasks' 

import styled from 'styled-components'

const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  width: 100%;
`
const TotalTasks = styled.p`
  font-size: 16px;
  margin: 10px 10px 10px 0px;

  @media (max-width: 280px) {
    font-size: 14px;
  }
`

const ClearButton = styled.button`
  display: inline-block;
  font-size: 18px;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 300;
  background-color: #ffffff;
  border: none;
  box-shadow: 10px 13px 21px -18px rgba(158,158,158,1);
  padding: 10px;
  transition: 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }

  &:focus {
    outline: 2px solid #9576A5;
  }

  @media (max-width: 280px) {
    font-size: 14px;
  }
`

export const Footer = () => {
  const dispatch = useDispatch()

  const items = useSelector(store => store.tasks.items)
  const completedItems = items.filter(item => item.complete)

  const handleRemoveAll = () => {
    dispatch(tasks.actions.removeAll())
  }

  return (
    <Container>
      <TotalTasks>
        {completedItems.length}/{items.length} tasks completed
      </TotalTasks>
      <ClearButton
        onClick={handleRemoveAll}
      >
        clear all
      </ClearButton>
    </Container>
  )
}