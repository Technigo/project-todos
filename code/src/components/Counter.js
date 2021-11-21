import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const CounterRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: space-evenly;
  height: 50px;
  margin: 10px auto;
  color: hotpink;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  @media (min-width: 700px) {
    font-size: 20px;
  }
`;

const Counter = () => {
  const items = useSelector((store) => store.todos.items.length);

  const amount = useSelector(
    (store) => store.todos.items.filter((item) => item.isComplete).length
  );

  const amountdone = useSelector(
    (store) => store.todos.items.filter((item) => !item.isComplete).length
  );
  return (
    <CounterRow>
      <ul>
        <li>Total amount right now: {items} </li>
        <li>You have {amount} completed</li>
        <li>You have {amountdone} left </li>
      </ul>
    </CounterRow>
  );
};

export default Counter;
