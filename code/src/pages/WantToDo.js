import React from 'react';
import styled from 'styled-components/macro';
import { IdeaList } from 'components/ToDoLists';
import { AddIdea } from 'components/AddToDo';
import { HomeBtn } from 'components/HomeBtn';

export const WantToDo = () => {
  return (
    <InnerWrapper>
      <h2>What do you want to do?</h2>
      <IdeaList />
      <AddIdea />
      <HomeBtn />
    </InnerWrapper>
  )
}

const InnerWrapper = styled.section`
display: flex;
width: 100%;
flex-direction: column;
align-items: center;
`