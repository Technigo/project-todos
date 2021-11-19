import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Counter = () => {
  const tasks = useSelector((state) => state.tasks.items);
  const completedTasks = tasks.filter((tasks) => tasks.isComplete === true);

  return (
    <div>
      <CounterInfo>
        You have completed {completedTasks.length}/{tasks.length}.
      </CounterInfo>
    </div>
  );
};

const CounterInfo = styled.p`
  color: #49586e;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  text-align: center;
`;

export default Counter;
