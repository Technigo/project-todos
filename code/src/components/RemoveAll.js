import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { tasks } from 'reducers/tasks';

export const RemoveAll = () => {
  const items = useSelector((store) => store.tasks.items);
  const enabled = items.length > 0;

  const dispatch = useDispatch();

  const handleRemoveButton = () => {
    dispatch(tasks.actions.removeAll())
  }

  return (
    <RemoveAllButton onClick={handleRemoveButton} disabled={!enabled}>
      <Emoji role="img" aria-label="Bin">🗑</Emoji> 
      Remove all tasks!
    </RemoveAllButton>
  );
};

const RemoveAllButton = styled.button`
  background: none;
  border: 1px solid #869D7A;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-family: Segoe UI;
  font-weight: bold;
`

const Emoji = styled.span`
  font-size: 28px;
  color: #6e6e6e;
  padding-right: 3px;
`