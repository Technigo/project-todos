import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
// import { Container } from 'styledelements/elements';
import EmptyState from './EmptyState';
import TaskList from './TaskList';

const Container = () => {
  const taskList = useSelector((store) => store.tasks.tasksArray);
  return (
    <Wrapper>
      {taskList.length > 0 ? <TaskList /> : <EmptyState />}
    </Wrapper>
  );
};

export default Container;

const Wrapper = styled.div`
display: flex;
justify-content: center;
border: solid 2px red;
`
