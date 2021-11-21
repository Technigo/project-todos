import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const RemainingTasksContainer = styled.div`
  width: 60vw;
  border: 2px solid white;
  display: flex;
  justify-content: center;
  border-radius: 5px 20px 5px;

  & h2 {
    font-size: 16px;
  }

  @media (min-width: 768px) {
    width: 200px;
  }
`;

const LeftTodoCounter = () => {
  const leftTodos = useSelector(
    (state) => state.todos.items.filter((item) => !item.isComplete).length
  );

  return (
    <RemainingTasksContainer>
      <h2>Remaining tasks: {leftTodos}</h2>
    </RemainingTasksContainer>
  );
};

export default LeftTodoCounter;
