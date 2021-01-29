import React, { useState } from 'react';

import styled from 'styled-components/macro';

export const FilterButton = ({ displayedStatus, setDisplayedStatus }) => {
  // const [value, setValue] = useState();

  const setActiveStatus = (status) => {
    setDisplayedStatus(status);
  }



  return (
    <>
      <select onChange={event => setActiveStatus(event.target.value)} >
        <option value="all">
          All
        </option>
        <option value="completed" >
          Completed
        </option>
        <option value="uncompleted" >
          Un-completed
        </option>
      </select>
    </>
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

  &.active {
    border-color: red !important;
  }

  &:hover {
    border: 2px solid #000;
  }

  @media (min-width: 767px) {
   padding: 10px 14px;
  }
`;