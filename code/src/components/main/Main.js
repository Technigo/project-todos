import { AddTask } from 'components/addtask/AddTask';
import { TaskCount } from 'components/taskcount/TaskCount';
import { TaskList } from 'components/tasklist/TaskList';
import React from 'react';
import { HeaderStyles } from 'components/headerfooter/Header.styles';
import { Footer } from 'components/headerfooter/Footer';
import { MainStyles } from './Main.styles';

export const Main = () => {
  return (
    <MainStyles>
      <HeaderStyles />
      <AddTask />
      <TaskCount />
      <TaskList />
      <Footer />
    </MainStyles>
  )
}