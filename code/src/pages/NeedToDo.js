import React from 'react';
import styled from 'styled-components/macro';
import { TaskList } from 'components/ToDoLists';
import { AddTask } from 'components/AddToDo';
import { HomeBtn } from 'components/HomeBtn';

export const NeedToDo = () => {
  return (
    <InnerWrapper>
      <Text>What do you need to do?</Text>
      <TaskList />
      <AddTask />
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