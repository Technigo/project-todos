import React from 'react';
import { useSelector } from 'react-redux';
import { Item } from './Item.js';
import styled from 'styled-components';
import { TodoInput } from 'components/TodoInput';
import { DeleteTodos } from 'components/DeleteTodos';
import { Summary } from 'components/Summary';

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

const Container = styled.ul`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  width: 250px;
  background-color: #f2bdcd;
  border: 1px solid black;
  border-radius: 10px;

  @media (min-width: 667px){
    width: 350px;
  }
`; 

const Header = styled.h1`
  font-size: 32px;
`;

export const List = () => {
  const list = useSelector(store => store.todos.list);

  return (
    <Main>
      <Container>
        <Header>To-Do List</Header>
        <TodoInput />
        {list.items.map((item, index) => (
          <Item key={todokey} itemIndex={index}></Item>
        ))}
        <Summary />
        <DeleteTodos />
      </Container>
    </Main>
  );
};