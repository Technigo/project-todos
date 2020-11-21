import React from 'react';
import { useSelector } from 'react-redux';

import { ListItem } from 'components/ListItem';

export const OtherTasks = () => {
  const todoList = useSelector((store) => store.todolist);
  const otherTasksList = todoList.list.items.filter((item) => item.category === "Other");

  //console.log(otherTasksList);

  return (
    <>
      <h1>Other Tasks List</h1>
      {otherTasksList.map((item) => (
        <ListItem key={item.id} listItem={item} />
      ))}
    </>
  )
};
