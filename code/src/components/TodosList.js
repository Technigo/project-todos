import React from 'react';
import { useSelector } from 'react-redux';
import { Item } from './Item';

import { ListContainer } from './StyledComponents/ListStyling';
import { AddTodo } from './AddTodo';

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