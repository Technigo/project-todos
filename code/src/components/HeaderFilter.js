import React from "react"
import { useDispatch } from "react-redux"
import styled from 'styled-components'

import { tasks } from "reducers/tasks"

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
      <button onClick={filterCompleted} >completed
        <Icon src="./assets/check-icon.svg" alt="check icon" />
      </button>
      <button onClick={filterUncompleted}>uncompleted
        <Icon src="./assets/square-icon.svg" alt="square icon" />
      </button>
      <button onClick={resetFilter}>reset
        <Icon src="./assets/square-icon.svg" alt="square icon" />
      </button>
    </>
  )
}