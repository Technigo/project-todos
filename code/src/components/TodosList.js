import React from 'react';
import { useSelector } from 'react-redux';
import { Item } from './Item.js';

import { ListContainer } from './ListStyling'
import { AddTodo } from 'components/AddTodo';

export const TodosList = () => {
  const items = useSelector((store) => store.todos.items);
  return (
    <ListContainer>
      <AddTodo></AddTodo>
      {items.map((item, index) => (
        <Item key={index} item={item}></Item>
      ))}
    </ListContainer>
  );
};