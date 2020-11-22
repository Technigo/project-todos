import React from 'react';
import { useSelector } from 'react-redux';

import { ListItem } from 'components/ListItem';

export const HouseChoreTasks = () => {
  // Get the complete to do list from the global state and filter out just the tasks
  // under the House Chores category
  const todoList = useSelector((store) => store.todolist);
  const onlyChoreTasks = todoList.items.filter((item) => item.category === "House Chores");

  return (
    <>
      <h1>House Chore related Tasks</h1>
      {onlyChoreTasks.map((item) => (
        <ListItem key={item.id} listItem={item} />
      ))}
    </>
  )
};
