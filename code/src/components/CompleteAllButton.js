import React from 'react';
import { useDispatch } from 'react-redux';
import { completeAll } from '../reducers/tasks';

const CompleteAllButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(completeAll());
  };

  return (
    <button type="button" onClick={handleClick}>
        Complete All
    </button>
  );
};

export default CompleteAllButton;