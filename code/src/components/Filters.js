import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const StyledFilters = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 30px;
  grid-gap: 0.5rem;
  justify-content: center;
  padding: 0.4rem;
`;

const Button = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: rgba(0, 0, 0, 0.02);
  border-radius: 10px;
  /* color: rgba(194, 0, 42, 1); */
  color: rgba(230, 0, 60, 1);
  padding: 0.3rem 0.5rem;
  /* letter-spacing: 0.05rem; */
  font-size: 0.6rem;
  /* margin: 0.5rem; */

  /* &:nth-of-type(1),
  &:nth-of-type(2) {
    border-right: none;
  }

  &:nth-of-type(4) {
    border-left: none;
  } */

  &:hover {
    /* background-color: rgba(194, 0, 42, 1); */
    background-color: rgba(230, 0, 60, 1);
    color: white;
    transition: all 150ms ease-in-out;
    cursor: pointer;
    /* font-weight: bold; */
  }
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.7rem;
  padding-left: 0.4rem;

  i {
    color: rgba(230, 0, 60, 1);
  }
`;

export const Filters = () => {
  const countAll = useSelector(state => state.todos);
  const countActive = useSelector(state =>
    state.todos.filter(todo => todo.completed !== true)
  );
  const countCompleted = useSelector(state =>
    state.todos.filter(todo => todo.completed === true)
  );
  const countPinned = useSelector(state =>
    state.todos.filter(todo => todo.pinned === true)
  );

  return (
    <StyledFilters>
      {/* <Icon>
        <i class="fas fa-filter"></i>
      </Icon> */}
      <Button>All ({countAll.length})</Button>
      <Button>Active ({countActive.length})</Button>
      <Button>Completed ({countCompleted.length})</Button>
      <Button>Pinned ({countPinned.length})</Button>
    </StyledFilters>
  );
};
