import React from 'react'
import styled from 'styled-components/macro'
import TaskAdder from './TaskAdder';
import TaskList from './TaskList';

const TodoSection = styled.section`
display: flex;
flex-direction: column;
align-items: center;
background-color: var(--foreground-secondary-color);
overflow: visible;
box-shadow:  
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3); 
`

const Todos = () => {
  return (
    <TodoSection>
      <TaskList />
      <TaskAdder />
    </TodoSection>
  );
}

export default Todos;