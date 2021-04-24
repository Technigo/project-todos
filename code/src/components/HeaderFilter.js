import React from "react"
import { useDispatch } from "react-redux"
import styled from 'styled-components'

import tasks from "reducers/tasks"

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
`

const HeaderButton = styled.button`
  background-color: transparent;
  border: none;
  width: 60%;
  margin: 5px 0;
  padding: 8px;
  border: 1px solid #8d8f96;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const HeaderButtonText = styled.button`
  background-color: transparent;
  border: none;
  font-size: 12px;
  font-weight: 400;
  width: 80%;
  margin: 5px 0;
  padding: 4px 8px;
  border: 1px solid #8d8f96;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-column: span 2;
  cursor: pointer;
`

const Icon = styled.img`
  width: 16px;
`

const HeaderFilter = () => {
  const dispatch = useDispatch()

  const onFilterChange = (filter) => {
    dispatch(tasks.actions.changeFilter(filter))
  }

  return (
    <ButtonContainer>
      <HeaderButton onClick={() => onFilterChange("completed")} >
        <Icon src="./assets/check-icon.svg" alt="check icon" />
      </HeaderButton>
      <HeaderButton onClick={() => onFilterChange("uncompleted")}>
        <Icon src="./assets/square-icon.svg" alt="square icon" />
      </HeaderButton>
      <HeaderButton onClick={() => onFilterChange("due soon")}>
        <Icon src="./assets/calendar-icon.svg" alt="calender icon" />
      </HeaderButton>
      <HeaderButton onClick={() => onFilterChange("overdue")}>
        <Icon src="./assets/calendar-overdue-icon.svg" alt="calender overdue icon" />
      </HeaderButton>
      <HeaderButtonText onClick={() => onFilterChange(null)}>
        reset filter
        <Icon src="./assets/filter-icon.svg" alt="filter icon" />
      </HeaderButtonText>
    </ButtonContainer>
  )
}

export default HeaderFilter
