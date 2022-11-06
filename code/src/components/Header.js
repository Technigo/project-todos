import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';

const Header = () => {
  const amount = useSelector((store) => store.todo.items.length);
  return (
    <StyledHeader>
      <StyledText>To do list</StyledText>
      <StyledAmount>{amount}</StyledAmount>
    </StyledHeader>
  )
}

export default Header;

export const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--color-lightgray);
    padding: 0 0 0.6rem 0;
`;

export const StyledText = styled.p`
    font-size: 1.688rem;
    font-weight: 800;
`;

export const StyledAmount = styled.p`
    font-size: 1.688rem;
    color: var(--color-gray);
    font-weight: 800;
`;