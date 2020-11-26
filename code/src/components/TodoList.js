import React from 'react';
import { useSelector } from 'react-redux';

import { TodoItem } from './TodoItem';
import { SectionTodoList } from '../styledComponents/styled_components';

export const TodoList = () => {
  // Get list info for this list form the (global) redux store
  const list = useSelector((store) => store.todos.list) 
  // That is the object we want the variable 'list' to be.
  // Look in state tree for path!!!

  return (
    <SectionTodoList className='todo-list'>
      {list.items.map((item, index) => (
        <TodoItem item={item.text} key={index} itemIndex={index}></TodoItem>
      ))}
    </SectionTodoList>
  );
};



