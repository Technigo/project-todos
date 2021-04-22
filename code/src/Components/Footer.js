import React from "react";
import styled from "styled-components";

import { todos } from "../Reducers/todos";
import { RoundedButton } from "./Selects/RoundedButton";

export const Footer = () => {
  return (
    <Container>
      <RoundedButton
        buttonText="Clear completed"
        action={todos.actions.clearAllCompleted()}
      />
    </Container>
  );
};

const Container = styled.footer`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(238, 238, 238);
  position: absolute;
  bottom: 0;
`;
