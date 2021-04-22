import React, { useState } from "react"
import styled from 'styled-components'

import HeaderOverview from "./HeaderOverview"
import HeaderActions from "./HeaderActions"
import HeaderFilter from "./HeaderFilter"

const Container = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  box-shadow: 0 0 10px #8d8f96;
`

const HeaderBottom = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  align-items: center;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const HeaderButton = styled.button`
  background-color: transparent;
  border: none;
  font-weight: 600;
  margin: 5px 0;
  padding: 5px;
  border: 1px solid #8d8f96;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Icon = styled.img`
  width: 16px;
`

const Header = () => {
  const [showOverview, setShowOverview] = useState(true)
  const [showActions, setShowActions] = useState(false)
  const [showFilter, setShowFilter] = useState(false)

  const handleClickOverview = () => {
    setShowOverview(true)
    setShowActions(false)
    setShowFilter(false)
  }

  const handleClickActions = () => {
    setShowActions(true)
    setShowOverview(false)
    setShowFilter(false)
  }

  const handleClickFilter = () => {
    setShowFilter(true)
    setShowActions(false)
    setShowOverview(false)
  }

  return (
    <Container>
      <h1>To do</h1>
      <HeaderBottom>
        <ButtonContainer>
          <HeaderButton onClick={handleClickOverview} >
            <Icon src="./assets/overview-icon.svg" alt="overview icon" />
          Overview
          </HeaderButton>

          <HeaderButton onClick={handleClickActions} >
            <Icon src="./assets/actions-icon.svg" alt="actions icon" />
          Actions
          </HeaderButton>

          <HeaderButton onClick={handleClickFilter} >
            <Icon src="./assets/filter-icon.svg" alt="filter icon" />
          Filter
          </HeaderButton>
        </ButtonContainer>

        <ButtonContainer>
          {showOverview && <HeaderOverview />}
          {showActions && <HeaderActions />}
          {showFilter && <HeaderFilter />}
        </ButtonContainer>
      </HeaderBottom>
    </Container>
  )
}

export default Header
