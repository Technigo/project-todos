import React from 'react';
import { useSelector } from 'react-redux';

import { ListItem } from 'components/ListItem';

export const StudiesTasks = () => {
  const todoList = useSelector((store) => store.todolist);
  const onlyStudyTasks = todoList.filter((item) => item.category === "Studies");

  //console.log(onlyStudyTasks);
  console.log(todoList.length);
  // When adding a new item, item id can be todoList.length + 1 ??

  return (
    <>
      <h1>Study related Tasks</h1>
      {onlyStudyTasks.map((item) => (
        <ListItem key={item.id} listItem={item} />
      ))}
    </>
  )
};
