import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Text = styled.p`
  font-family: monospace;
  font-size: 14px;
`;

export const Summary = () => {
  const list = useSelector(store => store.todos.list);
  const finishedTodos = list.items.filter(item => item.done).length;

  return (
    <div>
      <Text tabindex='0'>{finishedTodos}/{list.items.length} Done</Text>
    </div>
  )
}