import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const AmountText = styled.div`
  font-style: italic;
  padding-bottom: 20px;
  margin-top: 10px;

  h6 {
    margin: 0;
    font-size: 12px;
  }
`;

export const AmountOfTasks = () => {
  const amount = useSelector(
    (store) => store.todos.items.filter((item) => !item.isComplete).length
  );
  const amountdone = useSelector(
    (store) => store.todos.items.filter((item) => item.isComplete).length
  );
  return (
    <AmountText>
      <h6>{amount} tasks to complete</h6>
      <h6>{amountdone} tasks completed</h6>
    </AmountText>
  );
};
