import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components'; 

import todos from '../reducers/todos';

import NewTodo from './NewTodo';


const Section = styled.section`
  background: transparent;
  padding: 3vh;
`;

const TodoList = () => {
  const tasks = useSelector((store) => store.todos.tasks);
  const dispatch = useDispatch();

  return (
    <Section>
      <NewTodo />
      {tasks.map(todo => (
        <div key={todo.id}>
          <input 
            type="checkbox"
            onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
          >
          </input>
          <p>{todo.content}</p> 
        </div>
      ))}
    </Section>
  );
};

export default TodoList;