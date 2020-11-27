import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { TodoItem } from "./TodoItem";
import { todos } from "../reducers/todos";
import { DeleteTodoButton } from "./DeleteTodoButton";

export const TodoList = () => {
  const items = useSelector(store => store.todos.items);
  const dispatch = useDispatch();

  // const onTodoDelete = id => {
  // dispatch(todos.actions.removeTodoItem(id));
  //};

  //<DeleteButton onClick={() => onTodoDelete(item.id)}>X</DeleteButton>
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
