import React from 'react';
import styled from 'styled-components/macro';

import TaskForm from './TaskForm';
import TodosList from './TodosList';
import Header from './Header';

const TodoWrapper = () => {
  return (
    <>
      <Main>
        <Header />
        <TaskForm />
        <TodosList />
      </Main>
    </>
  )
};

export default TodoWrapper;

const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`