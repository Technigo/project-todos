import React from "react";
import { useSelector } from "react-redux";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";
import { TodoSummary } from "./TodoSummary";

export const TodoList = () => {
  const list = useSelector((store) => store.todos.list);
  return (
    <div>
      <TodoInput />
      {list.items.map((item, index) => (
        <TodoItem key={index} itemIndex={index}></TodoItem>
      ))}
      <TodoSummary />
    </div>
  );
};
