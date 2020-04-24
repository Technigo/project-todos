import React from "react";
import { TodoItem } from "./ToDoItem.js";
import { TodoInput } from "./ToDoInput.js";
import { useSelector } from "react-redux";
import styled from "styled-components";

export const TodoList = () => {
  const list = useSelector((store) => store.todos.list);

  return (
    <TodoListContainer>
      <TodoInput />
      {list.items.map((item, index) => (
        <TodoItem item={item} itemIndex={index} />
      ))}
    </TodoListContainer>
  );
};

const TodoListContainer = styled.section`
  margin: 10px auto;
  padding: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 4px;
  background-color: white;
`;
