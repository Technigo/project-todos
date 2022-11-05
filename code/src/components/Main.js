import React from 'react';
import { OuterWrapper, InnerWrapper } from 'styles/GlobalStyles';
import NewTodo from './NewTodo';
import ListOfTodos from './ListOfTodos'

const Main = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <ListOfTodos />
        <NewTodo />
      </InnerWrapper>
    </OuterWrapper>
  )
}

export default Main