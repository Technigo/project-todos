import React, { useState } from "react";
import styled from "styled-components";

import TodoList from "./TodoList";

import todos from "./assets/todos.png";

/*STYLED COMPONENTS*/
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
  font-size: 20px;
  font-weight: 600;
`;

const AddTodoBtn = styled.button`
  background: #6dbd89;
  background: linear-gradient(
    0deg,
    rgba(109, 189, 137, 1) 0%,
    rgba(109, 189, 137, 1) 100%
  );

  box-shadow: 0 0.5em 1.5em -0.5em rgba(109, 189, 137, 1);
  border-radius: 10px;
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
    box-shadow: none;
  }
`;
/*STYLED COMPONENTS*/

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
          <Img src={todos} alt="todo-list" />
          <IntroP>Nice and clean, no tasks todo!</IntroP>
          <AddTodoBtn onClick={onStart}>Add todo</AddTodoBtn>
        </Section>
      )}
    </>
  );
};

export default NoTodos;
