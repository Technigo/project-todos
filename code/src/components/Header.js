import React from 'react';
import { useSelector } from 'react-redux';
// import styled from 'styled-components';
import { InnerWrapper } from './GlobayStyles';

export const Header = () => {
  const todos = useSelector((state) => state.tasks.items);
  const todosCompleted = todos.filter((item) => item.isChecked === true)

  return (
    <header>
      <InnerWrapper>
        <h1>TO DO LIST</h1>
        <h3>{todosCompleted.length} of {todos.length} tasks are completed</h3>
      </InnerWrapper>
    </header>
  )
}
