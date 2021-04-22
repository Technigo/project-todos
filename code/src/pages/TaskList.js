import React from 'react';
import Header from 'components/Header';
import TaskList from 'components/TaskList';
import TaskInput from 'components/TaskInput';

export default () => {
  return (
    <>
      <Header />
      <TaskList />
      <TaskInput />
    </>
  );
};
