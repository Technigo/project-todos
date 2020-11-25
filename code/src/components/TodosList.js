import React from 'react';
import { useSelector } from 'react-redux';
import { Item } from './Item';

import { ListContainer, TaskListInputContainer } from './StyledComponents/ListStyling';
import { AddTodo } from './AddTodo';
import { Counter } from './Counter';
import { Header } from './Header';

export const TodosList = () => {
  const items = useSelector((store) => store.todos.items);
  return (
    <TaskListInputContainer>
      <Header></Header>
      <AddTodo></AddTodo>
      <ListContainer>
        {items.map((item, index) => (
        <Item key={index} item={item}></Item>
      ))}
      <Counter></Counter>
      </ListContainer>
    </TaskListInputContainer>
  );
};