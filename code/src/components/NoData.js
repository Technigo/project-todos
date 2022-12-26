import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro';

const NoData = () => {
  const items = useSelector((state) => state.todo.items)

  return (
    <StyledContainer>
      {!items.length && (
        <StyledParagraph>All tasks completed</StyledParagraph>
      )}
    </StyledContainer>
  )
}
export default NoData

export const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledParagraph = styled.p`
  color: var(--color-gray);
  font-size: 1.25rem;
`;