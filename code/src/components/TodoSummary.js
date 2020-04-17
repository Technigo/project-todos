import React, { useEffect, useState } from "react";
import { TodoItem } from "./TodoItem.js";
import { TodoInput } from "./TodoInput.js";
import { useSelector } from "react-redux";

export const TodoSummary = () => {
  // Get list information for this list
  const list = useSelector(store => store.todos.list);

  // Count the number of items that are done
  const numDone = list.items.filter(item => item.done).length;

  return (
    <section className="todo-summary">
      <h2>
        {numDone}/{list.items.length} Do's done!
      </h2>
    </section>
  );
};