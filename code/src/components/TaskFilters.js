import React from 'react';
import { useDispatch } from 'react-redux';
import { clearAllTasks, filteredTasks } from 'reducers/tasks';
import styled from 'styled-components/macro';

// ⬇ This will be used for filtering the tasks
export const filters = {
  ALL: 'ALL',
  COMPLETED: 'COMPLETED',
  NOT_COMPLETED: 'NOT_COMPLETED'
};

const TaskFilters = () => {
  const dispatch = useDispatch();

  return (
    <FilterWrapper>
      <FilterBtn type="button" onClick={() => dispatch(clearAllTasks())}>Clear All</FilterBtn>
      <FilterBtn type="button" onClick={() => dispatch(filteredTasks(filters.ALL))}>Show All</FilterBtn>
      <FilterBtn type="button" onClick={() => dispatch(filteredTasks(filters.NOT_COMPLETED))}>Todo</FilterBtn>
      <FilterBtn type="button" onClick={() => dispatch(filteredTasks(filters.COMPLETED))}>Completed</FilterBtn>
    </FilterWrapper>
  );
};
export default TaskFilters;

const FilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (min-width: 1024px) {
    width:48%;
  }
`

const FilterBtn = styled.button`
  display: flex;
  font-size: 12px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid grey;
  margin: 0;
  padding: 0;
  img {
    width: 30px;
    height: 30px;    
  }
  @media (min-width: 768px) {
    font-size: 16px;
  }
`