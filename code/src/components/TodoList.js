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
  background: transparent;
`;

const EmptyStateParagraph = styled.p`
  font-size: 16px;
  color: #303960;
  text-align: center;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  background: transparent;
  padding: 3vh;
`;

const Paragraph = styled.p`
  color: #303960;
  margin: 0;
`;

const TodosSection = styled.section`
  background: transparent;
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