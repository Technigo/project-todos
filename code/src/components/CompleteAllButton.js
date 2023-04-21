import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { completeAll } from '../reducers/tasks';

const Button = styled.button`
  background-color: #586535;
  color: white;
  padding: 0.5em 1em;
  border: none;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

const CompleteAllButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(completeAll());
  };

  return (
    <Button type="button" onClick={handleClick}>
        Complete All
    </Button>
  );
};

export default CompleteAllButton;