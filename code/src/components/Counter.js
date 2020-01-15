import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";

export const Counter = () => {
  const todos = useSelector(state => state.tasks.total);

  return <Container>Total todos: {todos} </Container>;
};

const Container = styled.div`
  text-align: center;
  font-weight: bold;
`;
