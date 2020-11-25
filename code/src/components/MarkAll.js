import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { tasks } from 'reducers/tasks';

export const MarkAll = () => {
  const items = useSelector((store) => store.tasks.items);
  const enabled = items.length > 0;

  const dispatch = useDispatch();

  const handleMarkButton = () => {
    dispatch(tasks.actions.markAll())
  };

  return (
    <MarkAllButton onClick={handleMarkButton} disabled={!enabled}>
      
      <Emoji role="img" aria-label="Bin">✔</Emoji> 
      Mark all tasks!
    </MarkAllButton>
  );
};

const MarkAllButton = styled.button`
  background: none;
  border: 1px solid #869D7A;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-family: 'PT Sans', sans-serif;
  font-size: 14px;
  margin-top: 6px;

  &:hover {
    border: 1px solid #000;
  }
`;

const Emoji = styled.span`
  font-size: 28px;
  color: #6e6e6e;
  padding-right: 3px;
`;