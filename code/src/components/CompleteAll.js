import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import todos from '../reducers/todos';

//styled components
const AllTaskButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

const Button = styled.button`
  border: none;
  cursor: pointer;
  background-color: #002366;
  color: white;
  font-family: 'Poiret One', cursive;
  font-weight: 700;
  margin: 20px;
  border-radius: 20px;
  padding: 8px;
  &:hover {
    background-color: #bc9828;
  }
`;

//component to complete and clear all tasks
const CompleteAll = () => {
  //dispatches actions and trigger state changes to the store
  const dispatch = useDispatch();

  return (
    <AllTaskButtonWrapper>
      <Button onClick={() => dispatch(todos.actions.completeAllTasks())}>
        Complete All
      </Button>
      <Button onClick={() => dispatch(todos.actions.removeAllTasks())}>
        Remove All
      </Button>
    </AllTaskButtonWrapper>
  );
};

export default CompleteAll;
