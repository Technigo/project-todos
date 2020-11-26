import React from 'react';
import { useSelector } from 'react-redux';
import { Item } from './Item';

import { ListContainer, TaskListInputContainer } from './StyledComponents/ListStyling';
import { AddTodo } from './AddTodo';
import { Counter } from './Counter';
import { Header } from './Header';

export const TodosList = () => {
  const items = useSelector((store) => store.todos.items);
  //filters the array
  const removedTodos = items.filter((item) => item.id !==true)

  // if all tasks are removed from the list then this will be rendered
  if(removedTodos.length === 0) { 
    return(
      <TaskListInputContainer>
        <Header></Header>
        <AddTodo></AddTodo>
        <div>NO MORE TODOS</div>
      </TaskListInputContainer>
    );
  };


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