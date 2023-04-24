import React from 'react';
import styled from 'styled-components';
import { AddTask } from 'components/AddTask';
import { Tasklist } from 'components/Tasklist';
import { Header } from './Header';

export const TodoApp = () => {
  return (
    <Main>
      <InnerWrapper>
        <Header />
        <AddTask />
        <Tasklist />
      </InnerWrapper>
    </Main>
  )
}

const Main = styled.main`
display: flex;
justify-content: center;
height: 100vh;
`
const InnerWrapper = styled.section`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5%;
  background: rgb(242,249,241);
  background: radial-gradient(circle, rgba(242,249,241,1) 26%, rgba(182,205,189,1) 100%);
  border-radius: 15px;

  @media (min-width: 668px) {
    width: 85%;
    margin-top: 10px;
  }

  @media (min-width: 1024px) {
    width: 50%;
  }
`
