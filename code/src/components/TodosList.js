import React from 'react';
import { useSelector } from 'react-redux';

import { Item } from './Item';
import { AddTodo } from './AddTodo';
import { Counter } from './Counter';
import { Header } from './Header';
import { RemoveAll } from './RemoveAll';
import { ListContainer, TaskListInputContainer } from './StyledComponents/ListStyling';
import { EmptyStateImage, EmptyStateText } from './StyledComponents/EmptyStateStyling';
import  Yay from '../assets/yay.png';

export const TodosList = () => {
  const items = useSelector((store) => store.todos.items);
  //filters the array
  const removedTodos = items.filter((item) => item.id !==true);

  // if all tasks are removed from the list then this will be rendered
  if(removedTodos.length === 0) { 
    return(
      <TaskListInputContainer>
        <Header/>
        <AddTodo/>
        <EmptyStateImage src={Yay} alt="yay image"/>
        <EmptyStateText>ALL DONE!</EmptyStateText>
      </TaskListInputContainer>
    );
  };

  return (
    <TaskListInputContainer>
      <Header/>
      <AddTodo/>
      <ListContainer>
        {items.map((item, index) => (
          <Item key={item.id} item={item}></Item>
        ))}
        <Counter/>
        <RemoveAll/>
      </ListContainer>
    </TaskListInputContainer>
  );
};