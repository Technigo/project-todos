import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import TodoTask from './TodoTask.js';

const ListContainer = styled.ul`
border: 2px solid black;
background-color: white;
width: 40%;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;

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