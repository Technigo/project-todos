import React from 'react';
import styled from 'styled-components';

import TodoList from '../components/TodoList';
import ListHeader from '../components/ListHeader';

const ListTodos = () => {
  return (
    <Wrapper>
      <ListHeader />
      <TodoList />
    </Wrapper>
  );
};

export default ListTodos;

const Wrapper = styled.section`
  display: grid;
  width: 100%;
  margin: 0 auto;
  max-width: 600px;

  @media (min-width: 768px) {
    margin-top: 30px;
  }
`;
