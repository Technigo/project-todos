import React from "react";
import { useSelector } from "react-redux";

import { Item } from "./Item.js";
import { AddTodoButton } from "../lib/AddTodoButton";
import { Wrapper, TodoListContainer } from "../lib/ItemListStyle";
import { ListHeader } from "../lib/ListHeader";

export const TodoList = () => {
  const ongoingItems = useSelector(store => store.todos.items.filter(item => !item.isDone));
  const doneItems = useSelector(store => store.todos.items.filter(item => item.isDone));
  return (
    <>
      <ListHeader />
      <Wrapper>
        <TodoListContainer>
          {ongoingItems.map(item => (
            <Item key={item.id} item={item}></Item>
          ))}
          {doneItems.map(item => (
            <Item key={item.id} item={item} ></Item>
          ))}
        </TodoListContainer>
        <AddTodoButton />
      </Wrapper>
    </>
  );
};
