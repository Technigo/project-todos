import React from 'react';
import styled from 'styled-components';

const StyledFilters = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  /* grid-gap: 0.2rem; */
  justify-content: center;
  /* padding: 0.4rem; */
`;

const Button = styled.button`
  border: 1px solid crimson;
  background-color: transparent;
  /* border-radius: 10px; */
  color: crimson;
  padding: 0.3rem 0.5rem;
  /* margin: 0.5rem; */

  &:nth-of-type(1),
  &:nth-of-type(2) {
    border-right: none;
  }

  &:nth-of-type(4) {
    border-left: none;
  }

  &:hover {
    background-color: crimson;
    color: white;
    transition: all 150ms ease-in-out;
    cursor: pointer;
    font-weight: bold;
  }
`;

export const Filters = () => {
  return (
    <StyledFilters>
      <Button>All</Button>
      <Button>Completed</Button>
      <Button>Uncompleted</Button>
      <Button>Overdue</Button>
    </StyledFilters>
  );
};
