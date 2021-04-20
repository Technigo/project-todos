import React, { useState } from "react"
import styled from 'styled-components'

import { HeaderOverview } from "./HeaderOverview"
import { HeaderActions } from "./HeaderActions"
import { HeaderFilter } from "./HeaderFilter"

const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  box-sizing: border-box;
  box-shadow: 0 0 10px #8d8f96;
`

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`

export const Header = () => {
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

      <StyledDiv>
        <button onClick={handleClickOverview} >Overview</button>
        <button onClick={handleClickActions} >Actions</button>
        <button onClick={handleClickFilter} >Filter</button>
      </StyledDiv>

      <StyledDiv>

        {showOverview && <HeaderOverview />}
        {showActions && <HeaderActions />}
        {showFilter && <HeaderFilter />}
      </StyledDiv>
    </Container>
  )
}