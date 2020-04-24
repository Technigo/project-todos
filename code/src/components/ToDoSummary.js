import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

export const TodoSummary = () => {
  // Get list information for this list
  const list = useSelector((store) => store.todos.list);

  // Count the number of items that are done
  const numDone = list.items.filter((item) => item.done).length;

  return (
    <Summary>
      <Counter>
        {numDone}/{list.items.length} tasks done
      </Counter>
    </Summary>
  );
};

const Summary = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
`;

const Counter = styled.h2`
  font-family: "Helvetica";
  font-size: 24px;
  font-weight: lighter;
  text-align: left;

  color: #fff;
`;
