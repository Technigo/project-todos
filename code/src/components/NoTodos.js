import React, { useState } from "react";
import styled from "styled-components";

import TodoList from "./TodoList";

import task from "./assets/tasks.png";

// Styled components
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  width: 300px;
`;

const IntroP = styled.p`
  margin: 1em;
  color: #000;
`;

const AddTodoBtn = styled.button`
  background: #ad5389;
  background: linear-gradient(
    0deg,
    rgba(77, 54, 208, 1) 0%,
    rgba(132, 116, 254, 1) 100%
  );

  box-shadow: 0 0.7em 1.5em -0.5em #4d36d0be;
  border-radius: 50px;
  color: #fff;
  border: none;
  padding: 10px;
  width: 100px;
  height: 50px;
  font-size: 1.1em;
  cursor: pointer;
  font-family: "poppins", sans-serif;
  font-weight: 600;

  &:hover {
    box-shadow: 0 0.5em 1.5em -0.5em rgb(108, 181, 193);
  }

  &:active {
    box-shadow: 0 0.3em 1em -0.5em rgb(108, 181, 193);
  }
`;
// Styled components

const NoTodos = () => {
  const [start, setStart] = useState(false);

  const onStart = () => {
    setStart(true);
  };

  return (
    <>
      {start && <TodoList />}
      {!start && (
        <Section>
          <Img src={task} alt="a lot of ideas" />
          <IntroP>Every mastermind needs a todo, let's add your tasks"</IntroP>
          <AddTodoBtn onClick={onStart}>Add todo</AddTodoBtn>
        </Section>
      )}
    </>
  );
};

export default NoTodos;
