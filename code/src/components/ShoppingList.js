import React from 'react';
import { useSelector } from 'react-redux';

import { ListItem } from 'components/ListItem';

export const ShoppingList = () => {
  // Get the complete to do list from the global state and filter out just the tasks
  // under the Shopping List category
  const todoList = useSelector((store) => store.todolist);
  const onlyShoppingList = todoList.items.filter((item) => item.category === "Shopping List");

  return (
    <>
      <h1>Shopping List</h1>
      {onlyShoppingList.map((item) => (
        <ListItem key={item.id} listItem={item} />
      ))}
    </>
  )
};
