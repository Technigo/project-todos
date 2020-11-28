import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/';

import { Task } from './Task'

const TaskListContainer = styled.ul`
  margin: 0;
  padding: 0;
`;

export const TaskList = () => {
  const items = useSelector((store) => store.tasks.items)

  return (
    <TaskListContainer>
      {items.map((item) => (
        <Task key={item.id} item={item} />
      ))}
    </TaskListContainer>
  )
}