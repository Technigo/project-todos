import React, { useEffect, useState } from "react";
import { TodoItem } from "./TodoItem.js";
import { TodoInput } from "./TodoInput.js";
import { TodoSummary } from "./TodoSummary.js";
import { useSelector } from "react-redux";
import { RemoveAll } from './RemoveAll'

export const TodoList = () => {
  // Get list information for this list
  const list = useSelector((store) => store.todos.list);
  // const [list, setList] = useState(useSelector((store) => store.todos.list));

  return (
    <section className="todo-list">
      <TodoInput />
      {list.items.map((item, index) => (
        <TodoItem item={item} itemIndex={index} />
      ))}
      <RemoveAll />
      <TodoSummary />
    </section>
  );
};