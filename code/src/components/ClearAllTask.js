import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import styled from 'styled-components';

const CompleteButton = styled.button`
  background-color: rgb(176, 224, 230);
  height: 2.5em;
`;

const ClearAllTask = () => {
  const items = useSelector((store) => store.tasks.items);
  const dispatch = useDispatch();

  const onClearAllTask = (items) => {
    dispatch(tasks.actions.clearAllTask(items));
  };

  const onDeleteAll = (items) => {
    dispatch(tasks.actions.deleteAll(items));
  };

  const onClearAll = (items) => {
    onClearAllTask(items);
    setTimeout(() => onDeleteAll(items), 2000);
  };

  return (
    <CompleteButton
      onClick={() => {
        onClearAll(items);
      }}
    >
      Clear All
    </CompleteButton>
  );
};

export default ClearAllTask;
