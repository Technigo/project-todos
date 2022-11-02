import React from 'react';
import { OuterWrapper, InnerWrapper } from 'styles/GlobalStyles';
import { NewTodo } from './NewTodo';
import { TodoList } from './TodoList'

export const Paige = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <NewTodo />
        <TodoList />
      </InnerWrapper>
    </OuterWrapper>
  )
}

