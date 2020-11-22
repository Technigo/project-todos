import React from 'react';
import { useSelector } from 'react-redux';

import { ListItem } from 'components/ListItem';

// I wanted to categorize my tasks and show them in different sections, so I created a component
// for each category
export const StudiesTasks = () => {
  // I access the global state using selectors, so I manage to retrieve the complete to do list,
  // but also then filter that list to only get the tasks under the Studies category.
  const todoList = useSelector((store) => store.todolist);
  const onlyStudyTasks = todoList.items.filter((item) => item.category === "Studies");

  return (
    <>
      <h1>Study related Tasks</h1>
      {onlyStudyTasks.map(item => (
        <ListItem key={item.id} listItem={item} />
      ))}
    </>
  )
};
