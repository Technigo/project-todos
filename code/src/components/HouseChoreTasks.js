import React from 'react';
import { useSelector } from 'react-redux';

import { ListItem } from 'components/ListItem';
import { ListContainer, ListTitle } from '../styled-components/ListsComponents';

export const HouseChoreTasks = () => {
  // Get the complete to do list from the global state and filter out just the tasks
  // under the House Chores category
  const todoList = useSelector((store) => store.todolist);
  const onlyChoreTasks = todoList.items.filter((item) => item.category === "House Chores");

  return (
    <ListContainer white>
      <ListTitle>House Chores <span role="img" aria-label="book emoji">🧹</span></ListTitle>
      {onlyChoreTasks.map((item) => (
        <ListItem key={item.id} listItem={item} />
      ))}
    </ListContainer>
  )
};
