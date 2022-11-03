/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
// import toDos from 'reducers/toDos';
import { useSelector } from 'react-redux';

const FilterButtons = () => {
  const toDoList = useSelector((store) => store.toDos.items);
  const filterCompleted = () => {
    const completedTasks = toDoList.items.filter((task) => task.isCompleted)
  }
  return (
    <FilterContainer>
      <FilterButton onClick={filterCompleted()}>Completed</FilterButton>
      {/* <FilterButton onClick={}>Left to do</FilterButton> */}
    </FilterContainer>
  )
}

const FilterContainer = styled.div`
  display: inline;
`
const FilterButton = styled.button`
  width: 4rem;
`
export default FilterButtons;

// ANVÄNDS INTE NU; KANSKE BLIR AKTUELLT