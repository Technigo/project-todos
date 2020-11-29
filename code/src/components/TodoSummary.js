import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { SubTitle, Paragraph } from '../library/Text';

const TodoSummary = () => {
  const listArray = useSelector(store => store.todos.list);
  const todosCompleted = listArray.items.filter(item => item.isComplete).length;

  return (
    <Container>
      <TaskContainer>
        <Number>{listArray.items.length}</Number>
        <div>
          <Summary>Created</Summary>
          <Summary>Task{listArray.items.length === 1 ? '' : 's'}</Summary>
        </div>
      </TaskContainer>

      <TaskContainer>
        <Number>{todosCompleted}</Number>
        <div>
          <Summary>Completed</Summary>
          <Summary>Task{todosCompleted === 1 ? '' : 's'}</Summary>
        </div>
      </TaskContainer>
    </Container>
  );
};

export default TodoSummary;

const Container = styled.section`
  display: flex;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  height: 10vh;
`;

const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px;
`;

const Number = styled(SubTitle)`
  margin: 0 10px 8px 0;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
`;

const Summary = styled(Paragraph)`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.8rem;
`;
