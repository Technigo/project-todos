import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

export const Counter = () => {
  const items = useSelector((store) => store.todos.items.length);
  return <CounterText>You have {items} tasks today! </CounterText>;
};

const CounterText = styled.p`
  display: flex;
  margin: 50px auto 0px;
  width: fit-content;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  color: #ea86b6;
  font-size: 14px;
  font-weight: bold;
`;
