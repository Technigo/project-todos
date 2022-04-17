import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const CounterText = styled.p`
  margin-top: 50px;
  span {
    color: #004aad;
  }
`;

const TodoCount = () => {
  const uncompleteTodos = useSelector(
    (store) => store.todos.items.filter((item) => !item.isComplete).length
  );

  return (
    <>
      <CounterText>
        today you have <span>{uncompleteTodos}</span> todos left
      </CounterText>
    </>
  );
};

export default TodoCount;
