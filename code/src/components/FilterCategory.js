import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { todos } from 'reducers/todos'

export const FilterCategory = () => {
  const dispatch = useDispatch()

  // const categories = ['all', 'business', 'personal', 'shopping']

  return (
    <StyledWrapper>
      <StyledButton
        className="all"
        onClick={() => dispatch(todos.actions.changeFilter('all'))}>
        <StyledSmallHeadline>All</StyledSmallHeadline>
      </StyledButton>
      <StyledButton
        className="business"
        onClick={() => dispatch(todos.actions.changeFilter('business'))}>
        <StyledSmallHeadline>Business</StyledSmallHeadline>
      </StyledButton>
      <StyledButton
        className="personal"
        onClick={() => dispatch(todos.actions.changeFilter('personal'))}>
        <StyledSmallHeadline>Personal</StyledSmallHeadline>
      </StyledButton>
      <StyledButton
        className="shopping"
        onClick={() => dispatch(todos.actions.changeFilter('shopping'))}>
        <StyledSmallHeadline>Shopping</StyledSmallHeadline>
      </StyledButton>
      {/* {categories.map((category) => (
        <StyledButton
          key={category}
          className={category}
          onClick={() => dispatch(todos.actions.changeFilter(category))}>
          <StyledSmallHeadline>{category}</StyledSmallHeadline>
        </StyledButton>
      ))} */}
    </StyledWrapper>
  )
}

const StyledWrapper = styled.section`
  max-width: 400px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 3px;
  border: 1px red solid;
`
const StyledButton = styled.button`
  /* width: 24%; */
  border: none;
  background-color: #21274e;
  color: #9aaedb;
  display: flex;
  justify-content: center;
  padding: 8px;

  .all {
    border: 2px solid red !important;
  }
`
const StyledSmallHeadline = styled.h3`
  color: #9aaedb;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  margin: 0;
`
