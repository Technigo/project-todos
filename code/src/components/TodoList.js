import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components'; 

import EmptyStateImage from './EmptyStateImage';
import CompleteAllTodosButton from './CompleteAllTodosButton';
import Todo from './Todo';

const EmptyStateSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;

  @media (min-width: 768px) {
    padding: 60px 100px 100px 100px;
  }
`;

const EmptyStateParagraph = styled.p`
  font-size: 16px;
  color: #303960;
  text-align: center;
  padding: 0 60px;

  @media (min-width: 768px) {
    padding: 0 20px;
    font-size: 20px;
  }
  
  @media (min-width: 1200px) {
    font-size: 28px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  padding: 3vh;

  @media (min-width: 768px) {
    padding: 4vh;
  }
  
  @media (min-width: 1200px) {
    padding: 5vh;
  }
`;

const Paragraph = styled.p`
  color: #303960;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 20px;
  }
  
  @media (min-width: 1200px) {
    font-size: 28px;
  }
`;

const TodosSection = styled.section`
  background: #ffffff;

  @media (min-width: 768px) {
    padding-bottom: 80px;
  }
  
  @media (min-width: 1200px) {
    padding-bottom: 120px;
  }
`;

const TodoList = () => {
  const tasks = useSelector((store) => store.todos.tasks);

  return (
    <>
      {!tasks.length > 0 ? ( 
        <EmptyStateSection>
          <EmptyStateImage />
          <EmptyStateParagraph>
            Must be nice having nothing to do. If you change your mind, you can always add a todo!
          </EmptyStateParagraph>
        </EmptyStateSection>
      ) : (
        <>
          <Container>
            <Paragraph>{tasks.length} Todos</Paragraph>
            <CompleteAllTodosButton />
          </Container>
        
          <TodosSection>
            {tasks.map((todo) => (
              <Todo 
                key={todo.id}
                todo={todo}
              />
            ))}
          </TodosSection>
        </>
      )}
    </>
  );
};

export default TodoList;