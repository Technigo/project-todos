import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { TodoItem } from "./TodoItem";
import { DeleteTodoButton } from "./DeleteTodoButton";
import { NoTodos } from "./NoTodos";

export const TodoList = () => {
  const items = useSelector(store => store.todos.items);

  if (items.length <= 0) {
    return (
      <MainSection>
        <NoTodos />
      </MainSection>
    );
  } else {
    return (
      <MainSection>
        {items.map(item => (
          <TodoContainer key={item.id}>
            <TodoItem item={item}></TodoItem>
            <DeleteTodoButton item={item} />
          </TodoContainer>
        ))}
      </MainSection>
    );
  }
};

const MainSection = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 0;
`;

const TodoContainer = styled.article`
  display: flex;
  background-color: #fff;
  border-bottom: 1px solid #474747;
  padding: 2px 5px;
`;
