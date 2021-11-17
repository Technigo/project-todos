import React from "react";
import styled from "styled-components/macro";
import { TodoListItem } from "./TodoListItem";
import { AddButton } from "./AddButton";
import { EmptyListButton } from "./EmptyListButton";
import { useSelector } from "react-redux";
import { FinishAllTasksButton } from "./FinishAllTaskButton";

export const TodoList = () => {
  const todos = useSelector((store) => store.todo.todos);

  return (
    <>
      <TodoListContainer>
        <TodoListTitle>Todos</TodoListTitle>
        {todos.map((item) => {
          return <TodoListItem key={item.id} item={item} />;
        })}
      </TodoListContainer>
      <ButtonsContainer>
        <FinishAllTasksButton />
        <EmptyListButton />
      </ButtonsContainer>
      <AddButton />
    </>
  );
};

const TodoListContainer = styled.section`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
`;

const TodoListTitle = styled.h2`
  color: #d2d3db;
  margin: 0;
  text-transform: uppercase;
  font-size: 15px;
`;

const ButtonsContainer = styled.div`
  display: flex;
`;
