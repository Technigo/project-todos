import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro'
import TodoTask from './TodoTask.js';

const ListContainer = styled.ul`

min-width: 400px; 
margin: 50px auto;
padding: 20px;
background-color: white;
border-radius: 20px;
border: 2px solid lightgrey;
box-shadow: 5px 10px #888888;
text-overflow: none !important;

@media (min-width: 667px){
  width: 400px;
}
`

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <ListContainer>
      {todos.map((todo) => (
        <TodoTask id={todo.id} title={todo.title} completed={todo.completed} />
      ))}
    </ListContainer>
  );
};

export default TodoList;