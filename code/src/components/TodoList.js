import React from 'react';
import { useSelector } from 'react-redux';

import { TodoItem } from './TodoItem';
import { SectionTodoList } from '../styledComponents/styled_components';

// Responsible for rendering all todo-items. TodoItems component, in turn, renders 
// the custom checkbox, the delete-button, and isChecked state.
// The property item is passed as prop to TodoItem component.
export const TodoList = () => {
  // Get list info for this list form the (global) redux store
  const list = useSelector((store) => store.todos.list) 
  // store.todos.list - this is the object we want the variable 'list' to be.
  // Look in state tree for correct path.

  return (
    <SectionTodoList className='todo-list'>
      {list.items.map((item) => (
        <TodoItem 
          /*item-text={item.text}*/
          item={item} 
          key={item.id}>
      </TodoItem>
      ))}
    </SectionTodoList>
  );
};



