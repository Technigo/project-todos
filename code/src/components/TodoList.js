import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";
import { TodoSummary } from "./TodoSummary";
import Lottie from "lottie-react-web";
import animation from "../animation/check-list.json";

export const TodoList = () => {
  const list = useSelector((store) => store.todos.list);
  return (
    <TodoListContainer>
      <TodoInput />
      {list.items.map((item, index) => (
        <TodoItem key={index} itemIndex={index}></TodoItem>
      ))}
      <TodoSummary />
      {list.items.length === 0 && (
        <Lottie
          options={{
            animationData: animation,
          }}
          height="60%"
          width="25%"
        />
      )}
    </TodoListContainer>
  );
};

const TodoListContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
