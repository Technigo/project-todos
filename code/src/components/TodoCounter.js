import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const TodoCounter = () => {
  const taskList = useSelector((store) => store.tasks.tasksArray);
  const leftTodos = taskList.filter((task) => task.isCompleted === false);

  if (leftTodos.length > 0) {
    return (
      <CounterWrapper>
        Left todo: {leftTodos.length}/{taskList.length}
      </CounterWrapper>
    );
  } else if (leftTodos.length === 0) {
    return (
      <CounterWrapper>
       0 todo
      </CounterWrapper>
    );
  }
};
export default TodoCounter;

const CounterWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: 13px;
  font-weight: 400;
  color: #595555; 
  margin: 5px 0;

  @media (min-width: 667px) and (max-width: 1024px) {
    margin: 10px 20px 10px 0;
  }
      

  @media (min-width: 1025px) {
    margin: 10px 20px 0 0;
  }

  .no-left {
    color: transparent;
  }
`;
