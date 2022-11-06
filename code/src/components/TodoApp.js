import React from 'react'
import styled from 'styled-components'

import TaskList from 'components/TaskList';
import AddTask from 'components/AddTask'
import Header from 'components/Header'
import Footer from 'components/Footer';

const TodoApp = () => {
  return (
    <TodoAppContainer>
      <Header />
      <AddTask />
      <TaskList />
      <Footer />
    </TodoAppContainer>
  )
}

export default TodoApp;

const TodoAppContainer = styled.div`  
    background-color: var(--white);
    width: 100%;
    height: 100vh;
    margin: 0 auto;

    @media (min-width: 668px) { 
      width: 70%;
      max-width: 800px;
    }
        
`;
