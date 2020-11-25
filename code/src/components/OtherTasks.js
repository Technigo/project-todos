import React from 'react';
import { useSelector } from 'react-redux';

import { ListItem } from 'components/ListItem';
import { ListContainer, ListTitle } from '../styled-components/ListsComponents';

export const OtherTasks = () => {
  // Get the complete to do list from the global state and filter out just the tasks
  // under the Other category
  const todoList = useSelector((store) => store.todolist);
  const otherTasksList = todoList.items.filter((item) => item.category === "Other");

  return (
    <ListContainer white borderbottom>
      <ListTitle>Other <span role="img" aria-label="book emoji">🏃‍♀️</span></ListTitle>
      {otherTasksList.map((item) => (
        <ListItem key={item.id} listItem={item} />
      ))}
    </ListContainer>
  );
};
