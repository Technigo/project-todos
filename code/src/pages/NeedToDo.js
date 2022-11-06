import React from 'react';
import styled from 'styled-components/macro';
import { TaskList } from 'components/ToDoLists';
import { AddTask } from 'components/AddToDo';
import { HomeBtn } from 'components/HomeBtn';

export const NeedToDo = () => {
  return (
    <InnerWrapper>
      <TaskList />
      <AddTask />
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