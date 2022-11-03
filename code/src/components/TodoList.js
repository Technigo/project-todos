import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro'
import TodoTask from './TodoTask.js';

const ListContainer = styled.ul`

width: 280px; 
margin: 50px auto;
padding: 20px;
background-color: white;
border-radius: 20px;
display: flex;
flex-direction: column; 
align-items: center;
justify-content: center;
border: 1px dotted lightgrey;
box-shadow: 5px 10px #888888;

@media (min-width: 667px){
  width: 500px;
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