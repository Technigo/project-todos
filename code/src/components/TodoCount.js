import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const CounterText = styled.p`
  span {
    color: #8fc9a3;
    font-weight: bold;
  }
`;

const TodoCount = () => {
  // const counter = useSelector((store) => store.todos.items.length);
  const uncompleteTodos = useSelector(
    (store) => store.todos.items.filter((item) => !item.isComplete).length
  );

  return (
    <>
      {/* <p>You have {counter} tasks to do today</p> */}
      <CounterText>
        You have <span>{uncompleteTodos}</span> tasks todo
      </CounterText>
    </>
  );
};

export default TodoCount;
