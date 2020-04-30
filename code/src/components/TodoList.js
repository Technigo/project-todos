import React, { useEffect, useState } from "react";
import { TodoItem } from "./TodoItem.js";
import { TodoInput } from "./TodoInput.js";
import { TodoSummary } from "./TodoSummary.js";
import { useSelector } from "react-redux";
import { RemoveAll } from './RemoveAll'

export const TodoList = () => {
  const list = useSelector((store) => store.todos.list);

  return (
    <section className="todo-list">
      <TodoInput />
      {list.items.map((item, index) => (
        <TodoItem key={index} item={item} itemId={item.id} index={index} />
      ))}
      <RemoveAll />
      <TodoSummary />
    </section>
  );
};