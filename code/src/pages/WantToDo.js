import React from 'react';
import styled from 'styled-components/macro';
import { IdeaList } from 'components/ToDoLists';
import { AddIdea } from 'components/AddToDo';
import { HomeBtn } from 'components/HomeBtn';

export const WantToDo = () => {
  return (
    <InnerWrapper>
      <Text>What do you want to do?</Text>
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
const Text = styled.h2`
color: #ff999b;
`