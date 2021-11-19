import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

export const Counter = () => {
  const items = useSelector((store) => store.todos.items.length);
  return <CounterText>You have {items} tasks today! </CounterText>;
};

const CounterText = styled.p`
  display: flex;
  margin: 30px auto;
  width: fit-content;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  font-size: 18px;
  text-shadow: 0 0 2px #000;
  font-weight: bold;

  @media (min-width: 700px) {
    font-size: 22px;
  }
`;
