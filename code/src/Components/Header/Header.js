import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { todos } from "../../Reducers/todos";
import { RoundedButton } from "../Selects/RoundedButton";
import headerBg1920px from "../..//Assets/headerBg1920px.jpg";
import headerBg640px from "../../Assets/headerBg640px.jpg";

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
      <ColumnWrapper>
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
      </ColumnWrapper>
    </Container>
  );
};

//styled components
const Container = styled.header`
  width: 100%;
  position: absolute;
  top: 0;
  color: white;
  height: 150px;
  display: flex;
  justify-content: center;
  background-size: cover;
  background-position-y: center;
  background-image: url("${headerBg640px}");

  @media (min-width: 768px) {
    background-image: url("${headerBg1920px}");
    height: 250px;
    background-position: bottom;
  }
`;

const ColumnWrapper = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: flex-end;

@media (min-width: 768px){
  width: 500px;
}`;

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

  @media (min-width: 768px) {
    height: 250px;
  }
`;

const Column = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  margin: 20px;
  z-index: 1;

  & > button {
    align-self: flex-end;
  }
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
