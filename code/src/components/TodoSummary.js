import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { SubTitle } from '../library/Text';
import { Paragraph } from '../library/Text';

const TodoSummary = () => {
  const listArray = useSelector(store => store.todos.list);
  const todosCompleted = listArray.items.filter(item => item.complete).length;
  return (
    <SummaryContainer>
      <SummaryTaskContainer>
        <SummaryTaskNumber>{listArray.items.length}</SummaryTaskNumber>
        <div>
          <SummaryTask>Created</SummaryTask>
          <SummaryTask>
            Task{listArray.items.length === 1 ? '' : 's'}
          </SummaryTask>
        </div>
      </SummaryTaskContainer>

      <SummaryTaskContainer>
        <SummaryTaskNumber>{todosCompleted}</SummaryTaskNumber>
        <div>
          <SummaryTask>Completed</SummaryTask>
          <SummaryTask>Task{todosCompleted === 1 ? '' : 's'}</SummaryTask>
        </div>
      </SummaryTaskContainer>
    </SummaryContainer>
  );
};

export default TodoSummary;

const SummaryContainer = styled.section`
  display: flex;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  height: 10vh;
`;

const SummaryTaskContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px;
`;

const SummaryTaskNumber = styled.h2`
  margin: 0 10px 8px 0;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
`;

const SummaryTask = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.8rem;
`;
