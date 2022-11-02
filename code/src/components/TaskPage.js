import React from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

const TaskPage = () => {
  return (
    <section>
      <h1>What to do?</h1>
      <TaskInput />
      <TaskList />
    </section>
  )
}

export default TaskPage