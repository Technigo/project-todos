import React from "react";
import { useSelector } from "react-redux";

import { Item } from "./Item.js";
import { AddTodoIcon } from "../lib/AddTodoIcon";
import { Wrapper, TodoListContainer } from "../lib/ListStyle";
import { ListHeader } from "../lib/ListHeader";

export const TodoList = () => {
  const items = useSelector((store) => store.todos.items);

  return (
    <>
      <ListHeader />
      <Wrapper>
        <TodoListContainer>
          {items.map((item) => (
            <Item key={item.id} item={item}></Item>
          ))}
        </TodoListContainer>
        <AddTodoIcon />
      </Wrapper>
    </>
  );
};
