import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { completeAll } from '../reducers/tasks';

const Button = styled.button`
  background-color: #878894;
  padding: 0.5em 1em;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  width:200px;
  color:white;
  font-family: 'Montserrat', sans-serif;
  font-weight:400;
  font-size: 16px;
  margin-bottom: 20px;
  

  &:hover {
    background-color:#586535 ;
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