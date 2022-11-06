import React from 'react';
import { OuterWrapper, InnerWrapper } from 'styles/GlobalStyles';
import styled from 'styled-components';
import NewTodo from './NewTodo';
import ListOfTodos from './ListOfTodos'

const Main = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <Wrap>
          <ListOfTodos />
          <NewTodo />
        </Wrap>
      </InnerWrapper>
    </OuterWrapper>
  )
}

export default Main

const Wrap = styled.div`
height: 80vh;
`