import React from 'react';
import { useSelector } from 'react-redux';

import { ListItem } from 'components/ListItem';

export const HouseChoreTasks = () => {
  const todoList = useSelector((store) => store.todolist);
  const onlyChoreTasks = todoList.items.filter((item) => item.category === "House Chores");

  //console.log(onlyChoreTasks);

  return (
    <>
      <h1>House Chore related Tasks</h1>
      {onlyChoreTasks.map((item) => (
        <ListItem key={item.id} listItem={item} />
      ))}
    </>
  )
};
