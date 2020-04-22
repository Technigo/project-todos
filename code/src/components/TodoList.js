import React from "react";
import { TodoItem } from "./TodoItem.js";
import { TodoInput } from "./TodoInput.js";
import { TodoSummary } from "./TodoSummary.js";
import { useSelector } from 'react-redux'
import { List } from 'lib/Form'

export const TodoList = () => {
  // Get list information for this list from the store
const list = useSelector(store => store.todos.list)

  return (
  <List>
      <TodoSummary />
      <TodoInput />
      {list.items.map((item, index) => (
      <TodoItem itemIndex={index}></TodoItem>
      ))} 
  </List>
  )
};