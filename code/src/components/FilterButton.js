import React from 'react';

import styled from 'styled-components/macro';
import { SmallText } from 'styles/GlobalStyles';

export const FilterButton = ({ completed, uncompleted, all, setCompleted, setUnCompleted, setAll }) => {
  const showCompleted = () => {
    setCompleted(true)
    setUnCompleted(false)
    setAll(false)
  }

  const showUnCompleted = () => {
    setCompleted(false)
    setUnCompleted(true)
    setAll(false)
  }

  const showAll = () => {
    setCompleted(false)
    setUnCompleted(false)
    setAll(true)
  }

  return (
    <ButtonWrapper>
      <FilteringButton active={completed} onClick={showCompleted}>Show completed tasks</FilteringButton>
      <FilteringButton active={uncompleted} onClick={showUnCompleted}>Show uncompleted tasks</FilteringButton>
      <FilteringButton active={all} onClick={showAll}>Show all tasks</FilteringButton>
    </ButtonWrapper>

    // {/* <select onChange={setFilterFunction}>
    //   <option value={showAll} >
    //     completed
    // </option>
    // <option value={showCompleted} >
    //     completed
    // </option>
    // </select> */}
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const FilteringButton = styled.button`
  background: none;
  border: 2px solid #869D7A;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'PT Sans', sans-serif;
  font-size: 10px;
  font-weight: bold;
  width: 33%;

  padding: 4px 8px;
  margin: 0 3px;

  &:hover {
    border: 2px solid #000;
  }

  @media (min-width: 767px) {
   padding: 10px 14px;
  }
`;