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
`;

/*const DeleteButton = styled.button`
  align-self: center;
  padding: 8px;
  margin: 2px;
  font-size: 16px;
  background: ${props => props.background || "red"};
  color: #fff;
  border: none;
  border-radius: 5px;
  &:hover {
    background: black;
  }
`;*/
