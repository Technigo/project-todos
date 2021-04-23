import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { TodoInput } from "./TodoInput";
import { TodoItems } from "./TodoItems";
import { TodoCompleted } from "./TodoCompleted";
import { ClearAllButton } from "./ClearAllButton";



const ListContainer = styled.section`
  background: #ffffff;
  border-radius: 10px;
  width: 95%;
  padding: 5px;
  opacity: 0.8;
  @media (min-width: 667px) {
    width: 50%;
  }
  @media (min-width: 1024px) {
    width: 350px;
  }
`;

export const TodoList = () => {
  const list = useSelector((store) => store.todos.list);

  return (
    <>
      <TodoInput />
      <ListContainer>
        <TodoCompleted />
        {list.items.map((item, index) => (
          <TodoItems key={index} itemIndex={index} />
        ))}
        <ClearAllButton />
      </ListContainer>
    </>
  )
}