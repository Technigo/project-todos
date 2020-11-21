import React from 'react';
import { useSelector } from 'react-redux';

import { ListItem } from 'components/ListItem';

export const ShoppingList = () => {
  const todoList = useSelector((store) => store.todolist);
  const onlyShoppingList = todoList.filter((item) => item.category === "Shopping List");

  //console.log(onlyShoppingList);

  return (
    <>
      <h1>Shopping List</h1>
      {onlyShoppingList.map((item) => (
        <ListItem key={item.id} listItem={item} />
      ))}
    </>
  )
};
