import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const CounterText = styled.p`
  margin-top: 50px;
  span {
    color: #8fc9a3;
    font-weight: bold;
  }
`;

const TodoCount = () => {
  const uncompleteTodos = useSelector(
    (store) => store.todos.items.filter((item) => !item.isComplete).length
  );

  return (
    <>
      <CounterText>
        You have <span>{uncompleteTodos}</span> tasks to-do<span>.</span>
      </CounterText>
    </>
  );
};

export default TodoCount;
