import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";

const Summary = styled.div`
  text-align: right;
  font-size: 12px;
  font-weight: bold;
`;

export const TodoSummary = () => {
  //Get information from list from the store
  const list = useSelector((store) => store.todos.list);

  //Using filter to count the number of tasks that are done
  const finishedTodos = list.items.filter((item) => item.isComplete).length;

  return (
    <Summary>
      <p>
        {finishedTodos}/{list.items.length} tasks complete
      </p>
    </Summary>
  );
};
