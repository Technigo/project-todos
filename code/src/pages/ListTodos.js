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
  /* width: 100%;
  margin: 0 auto;
  max-width: 600px; */
  width: 375px;
  height: 667px;
  border-radius: 16px 16px 32px 32px;
  margin: 120px auto 0;
  overflow: hidden;

  @media (min-width: 768px) {
    margin-top: 30px;
  }
`;
