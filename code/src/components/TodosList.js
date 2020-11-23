import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Item } from './Item.js';

import { todos } from 'reducers/todos';
import { ListContainer, ListActionButton } from './ListStyling'
import { AddTodo } from 'components/AddTodo';

export const TodosList = () => {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.todos.items);

  return (
    <ListContainer>
      <AddTodo></AddTodo>
      {items.map((item, index) => (
        <Item key={index} item={item}></Item>
      ))}
      <ListActionButton onClick={() => dispatch(todos.actions.removeTodo())}>
        Remove To-do
      </ListActionButton>
    </ListContainer>
  );
};