import React from 'react';
import { useSelector } from 'react-redux';

import styled from 'styled-components'; 
import { Paragraph } from '../lib/Text';

const TodoSummary = () => {
  const list = useSelector(store => store.todos.list);
  const todosCompleted = list.items.filter(item => item.complete).length

  return (
    <Summary>
      <Paragraph>Completed: {todosCompleted}</Paragraph>
      <Paragraph>Total: {list.items.length} </Paragraph> 
    </Summary>
  )
}
export default TodoSummary;

const Summary = styled.section `
  grid-template-columns: 1fr 1fr;
  display: grid;
  align-content: space-between;
`