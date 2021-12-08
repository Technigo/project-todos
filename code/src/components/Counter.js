import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const CompletedWrapper = styled.div`
  display: flex;
  background-color: #8fbfd7;
  border: 1px solid #337b9e;
  border-radius: 10px;
  padding: 8px;

  @media (min-width: 768px) {
    margin-right: 50px;
    border-radius: 18px;
  }
  @media (min-width: 1366px) {
    margin-right: 95px;
  }
`;

const CompletedText = styled.p`
  font-size: 10px;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 12px;
  }
`;

const Counter = () => {
  const counter = useSelector((store) => store.todos.items.length);

  const completed = useSelector((store) =>
    store.todos.items.filter((item) => item.isComplete)
  );

  return (
    <>
      <CompletedWrapper>
        <CompletedText>
          Completed {completed.length}/{counter} tasks
        </CompletedText>
      </CompletedWrapper>
    </>
  );
};

export default Counter;
