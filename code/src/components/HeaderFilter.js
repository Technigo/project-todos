import React from "react"
import { useDispatch } from "react-redux"
import styled from 'styled-components'

import { tasks } from "reducers/tasks"

const HeaderButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 12px;
  font-weight: 400;
  margin: 5px 0;
  border: 1px solid #8d8f96;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Icon = styled.img`
  width: 16px;
`

export const HeaderFilter = () => {
  const dispatch = useDispatch()

  const filterCompleted = () => {
    dispatch(tasks.actions.filterCompleted())
  }
  const filterUncompleted = () => {
    dispatch(tasks.actions.filterUncompleted())
  }

  const resetFilter = () => {
    dispatch(tasks.actions.resetFilter())
  }

  return (
    <>
      <HeaderButton onClick={filterCompleted} >
        completed
        <Icon src="./assets/check-icon.svg" alt="check icon" />
      </HeaderButton>
      <HeaderButton onClick={filterUncompleted}>
        uncompleted
        <Icon src="./assets/square-icon.svg" alt="square icon" />
      </HeaderButton>
      <HeaderButton onClick={resetFilter}>
        reset
        <Icon src="./assets/filter-icon.svg" alt="filter icon" />
      </HeaderButton>
    </>
  )
}