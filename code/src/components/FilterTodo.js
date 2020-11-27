import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { visibilityFilter, VisibilityFilter } from 'reducers/visibilityFilter';
import styled from 'styled-components';

import { Button } from '../lib/Button';
import { Subtitle } from '../lib/Text';

const Container = styled.footer`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e8e8e8;
`;

export const FilterTodo = () => {
  const currentvisibilityFilter = useSelector(
    (state) => state.visibilityFilter
  );

  console.log(currentvisibilityFilter);
  console.log(VisibilityFilter.ShowAll);

  const dispatch = useDispatch();

  const handleShowAll = (event) => {
    event.preventDefault();
    dispatch(
      visibilityFilter.actions.setVisibilityFilter({
        filter: VisibilityFilter.ShowAll
      })
    );
  };

  const handleShowActive = (event) => {
    event.preventDefault();
    dispatch(
      visibilityFilter.actions.setVisibilityFilter({
        filter: VisibilityFilter.ShowActive
      })
    );
  };

  const handleShowCompleted = (event) => {
    event.preventDefault();
    dispatch(
      visibilityFilter.actions.setVisibilityFilter({
        filter: VisibilityFilter.ShowCompleted
      })
    );
  };

  return (
    <Container>
      <Subtitle>Show</Subtitle>
      <Button
        disabled={currentvisibilityFilter === VisibilityFilter.ShowAll}
        onClick={handleShowAll}>
        All
      </Button>
      <Button
        disabled={currentvisibilityFilter === VisibilityFilter.ShowActive}
        onClick={handleShowActive}>
        Active
      </Button>
      <Button
        disabled={currentvisibilityFilter === VisibilityFilter.ShowCompleted}
        onClick={handleShowCompleted}>
        Completed
      </Button>
    </Container>
  );
};
