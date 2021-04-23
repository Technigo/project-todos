import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const CompletedTodos = styled.div`
  text-align: right;
  font-size: 12px;
  font-weight: bold;
`;

export const TodoCompleted = () => {
  const list = useSelector((store) => store.todos.list);
  const DoneTodos = list.items.filter((item) => item.isComplete).length;

  return (
    <CompletedTodos>
      <p>
        {DoneTodos}/{list.items.length} Completed✔️
      </p>
    </CompletedTodos>
  );
};