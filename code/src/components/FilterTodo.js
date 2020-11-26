import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
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
  const dispatch = useDispatch();
  const [filter, setFilter] = useState(VisibilityFilter.ShowAll);

  // const currentvisibilityFilter = useSelector(
  //   (state) => state.visibilityFilter
  // );

  console.log(VisibilityFilter.ShowAll);

  const handleShowAll = (event) => {
    event.preventDefault();
    setFilter(VisibilityFilter.ShowAll);
    dispatch(visibilityFilter.actions.setVisibilityFilter({ filter }));
  };

  const handleShowActive = (event) => {
    event.preventDefault();
    setFilter(VisibilityFilter.ShowActive);
    console.log(filter);
    dispatch(visibilityFilter.actions.setVisibilityFilter({ filter }));
  };

  const handleShowCompleted = (event) => {
    event.preventDefault();
    setFilter(VisibilityFilter.ShowCompleted);
    dispatch(visibilityFilter.actions.setVisibilityFilter({ filter }));
  };

  return (
    <Container>
      <Subtitle>Show</Subtitle>
      <Button
        // disabled={currentvisibilityFilter === filter}
        onClick={handleShowAll}>
        All
      </Button>
      <Button onClick={handleShowActive}>Active</Button>
      <Button onClick={handleShowCompleted}>Completed</Button>
    </Container>
  );
};
