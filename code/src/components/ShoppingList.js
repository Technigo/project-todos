import React from 'react';
import { useSelector } from 'react-redux';

import { ListItem } from 'components/ListItem';
import { ListContainer, ListTitle } from '../styled-components/ListsComponents';

export const ShoppingList = () => {
  // Get the complete to do list from the global state and filter out just the tasks
  // under the Shopping List category
  const todoList = useSelector((store) => store.todolist);
  const onlyShoppingList = todoList.items.filter((item) => item.category === "Shopping List");

  return (
    <ListContainer>
      <ListTitle>Shopping <span role="img" aria-label="book emoji">🍉</span></ListTitle>
      {onlyShoppingList.map((item) => (
        <ListItem key={item.id} listItem={item} />
      ))}
    </ListContainer>
  )
};
