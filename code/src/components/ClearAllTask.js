import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import styled from 'styled-components';
import JSConfetti from 'js-confetti';

const CompleteButton = styled.button`
  background-color: rgb(176, 224, 230);
  height: 2.5em;
`;

const ClearAllTask = () => {
  const jsConfetti = new JSConfetti();
  const items = useSelector((store) => store.tasks.items);

  const dispatch = useDispatch();

  const onDeleteAll = (items) => {
    dispatch(tasks.actions.deleteAll(items));
  };

  const onClearAll = (items) => {
    setTimeout(() => onDeleteAll(items), 1500);
    setTimeout(() => jsConfetti.addConfetti(), 1500);
  };

  return (
    <>
      <CompleteButton
        onClick={() => {
          onClearAll(items);
        }}
      >
        Clear All
      </CompleteButton>
    </>
  );
};

export default ClearAllTask;
