import React, { useEffect, useState } from "react";
import { TodoItem } from "./TodoItem.js";
import { TodoInput } from "./TodoInput.js";
import { useSelector } from "react-redux";

const TodoSummary=styled.section`
margin: 8px;
`

export const TodoSummary = () => {
  //Gets information from the store for this list
  const list = useSelector(store=>store.todos.list)

  //Counts the number of todos that are done using filter

  return <TodoSummary>
    <h2>0/{list.items.length} tasks done</h2>
  </TodoSummary>
}