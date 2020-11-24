import React from 'react';
import { useSelector } from 'react-redux';

import { ListItem } from 'components/ListItem';
import { ListContainer, ListTitle } from '../styled-components/ListsComponents';

// I wanted to categorize my tasks and show them in different sections, so I created a component
// for each category
export const StudiesTasks = () => {
  // I access the global state using selectors, so I manage to retrieve the complete to do list,
  // but also then filter that list to only get the tasks under the Studies category.
  const todoList = useSelector((store) => store.todolist);
  const onlyStudyTasks = todoList.items.filter((item) => item.category === "Studies");

  return (
    <ListContainer>
      <ListTitle>Studies <span role="img" aria-label="book emoji">📚</span></ListTitle>
      {onlyStudyTasks.map(item => (
        <ListItem key={item.id} listItem={item} />
      ))}
    </ListContainer>
  )
};
