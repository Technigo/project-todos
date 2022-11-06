import React from 'react';
import styled from 'styled-components/macro';
import { IdeaList } from 'components/ToDoLists';
import { AddIdea } from 'components/AddToDo';
import { HomeBtn } from 'components/HomeBtn';

export const WantToDo = () => {
  return (
    <InnerWrapper>
      <IdeaList />
      <AddIdea />
      <HomeBtn />
    </InnerWrapper>
  )
}

const InnerWrapper = styled.section`
display: flex;
width: 100%;
height: 100%;
flex-direction: column;
align-items: center;
justify-content: space-between;
`