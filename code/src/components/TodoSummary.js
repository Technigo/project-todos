import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { TodoItem } from './TodoItem';
import { TodoInput } from './TodoInput';
import { SubTitle } from '../library/Text';
import { Paragraph } from '../library/Text';

const TodoSummary = () => {
  const list = useSelector(store => store.todos.list);
  const complete = list.items.filter(item => item.complete).length;
  return (
    <SummaryContainer>
      <SummaryContainer>
        <SubTitle>{list.items.length}</SubTitle>
        <div>
          <Paragraph>Created</Paragraph>
          <Paragraph>Tasks</Paragraph>
        </div>
      </SummaryContainer>

      <SummaryContainer>
        <SubTitle>{complete}</SubTitle>
        <div>
          <Paragraph>Completed</Paragraph>
          <Paragraph>Tasks</Paragraph>
        </div>
      </SummaryContainer>
    </SummaryContainer>
  );
};

export default TodoSummary;

const SummaryContainer = styled.section`
  display: flex;
`;
