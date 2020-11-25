import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { TodoItem } from './TodoItem'

const SectionTodoList = styled.section`
  margin-top: 30px;
`

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

/*
- Show TodoInput
- Show each TodoItem in the List
- Show TodoSummary
*/


