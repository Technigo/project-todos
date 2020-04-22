import React from 'react';
import { useSelector } from 'react-redux';
import { SummaryContainer } from '../lib/Containers';
import { SpanText } from '../lib/Texts';

export const TodoSummary = ({projectName}) => {
  const list = useSelector(store => store.todos[projectName]);
  const doneTodos = list.filter(item => item.done).length;

  return (
    <SummaryContainer>
      <SpanText>{list.length} {list.length === 1 ? 'task' : 'tasks'}</SpanText>
      <SpanText>{doneTodos} completed</SpanText>
    </SummaryContainer>
  )
};