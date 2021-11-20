import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { todos } from 'reducers/todos'

export const FilterCategory = () => {
  const dispatch = useDispatch()

  const categories = ['all', 'personal', 'business', 'shopping']

  return (
    <MainWrapper>
      <StyledSmallHeadline>Filter categories</StyledSmallHeadline>
      <StyledWrapper>
        {categories.map((item) => (
          <StyledButton
            key={item}
            className={item}
            onClick={() => dispatch(todos.actions.changeFilter(item))}>
            <StyledSmallHeadline>{item}</StyledSmallHeadline>
          </StyledButton>
        ))}
      </StyledWrapper>
    </MainWrapper>
  )
}

const MainWrapper = styled.div`
  max-width: 400px;
  margin: 20px auto;
  padding-bottom: 25px;
  border-bottom: 1px dashed #9aaedb;
`

const StyledWrapper = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 15px;
`
const StyledButton = styled.button`
  border: #21274e 1px solid;
  background-color: #21274e;
  color: #9aaedb;
  display: flex;
  justify-content: center;
  padding: 7px;
  border-radius: 6px;

  &:hover {
    border: #9aaedb 1px solid;
  }

  &:after {
    color: red;
  }
`
const StyledSmallHeadline = styled.h3`
  color: #9aaedb;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  margin: 0;
`
