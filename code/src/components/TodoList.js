import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components'; 

import Todo from './Todo';

const Section = styled.section`
  background: transparent;
  padding: 3vh;
`;

const TodoList = () => {
  const tasks = useSelector((store) => store.todos.tasks);

  return (
    <Section>
      {tasks.map((todo) => (
        <Todo 
          key={todo.id}
          todo={todo}
        />
      ))}
    </Section>
  );
};

export default TodoList;