import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { todos } from "../Reducers/todos";
import { RoundedButton } from "./Selects/RoundedButton";

export const Header = () => {
  const tasks = useSelector((store) => store.todos.items);
  const today = new Date().toLocaleString("default", {
    month: "long",
    day: "2-digit",
  });
  const completedTasks = tasks.filter((task) => task.isComplete);

  return (
    <Container>
      <Overlay />
      <Column>
        <Header1>Todos</Header1>
        <Header2>{today}</Header2>
      </Column>
      <Column>
        <Text>
          {completedTasks.length} / {tasks.length} tasks completed
        </Text>
        <RoundedButton
          buttonText="Complete all"
          action={todos.actions.completeAll()}
        />
      </Column>
    </Container>
  );
};

//styled components
const Container = styled.header`
  position: relative;
  color: white;
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background-size: cover;
  background-position-y: center;
  background-image: url("https://images.unsplash.com/photo-1568205612837-017257d2310a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80");
`;

const Overlay = styled.div`
  position: absolute;
  height: 150px;
  width: 100%;
  background: linear-gradient(
    0deg,
    rgb(28, 74, 114) 0%,
    rgb(71, 148, 179) 35%,
    rgb(255, 255, 255) 100%
  );
  opacity: 0.5;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  z-index: 1;
`;

const Header1 = styled.h1`
  margin: 0;
`;

const Header2 = styled.h2`
  margin: 0;
  font-weight: 400;
  font-size: 17px;
`;

const Text = styled.p`
  margin: 0;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
`;
