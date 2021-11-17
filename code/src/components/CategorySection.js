import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
  max-width: 400px;
  margin: 0 auto;
`
const StyledCategoryWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`

const StyledCategory = styled.div`
  height: 100%;
  width: 25%;
  color: #9aaedb;
  background-color: #21274e;
  padding: 8px;
  margin-top: 20px;
  font-size: 15px;
  border-radius: 8px;
  border: 2px tomato solid;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 3px 4px 0 rgba(0, 0, 0, 0.15);
`
const StyledSmallHeadline = styled.h3`
  color: #9aaedb;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  margin: 20px 0;
  border-bottom: 1px solid;
  line-height: 3;
`

export const CategorySection = () => {
  return (
    <StyledSection>
      <StyledSmallHeadline>Categories</StyledSmallHeadline>
      <StyledCategoryWrapper>
        <StyledCategory>Business</StyledCategory>
        <StyledCategory>Personal</StyledCategory>
        <StyledCategory>Shopping</StyledCategory>
      </StyledCategoryWrapper>
    </StyledSection>
  )
}
