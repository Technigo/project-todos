// import { EachTask } from 'components/eachTask/EachTask';
import React from 'react';
import { IncompleteTasks } from './IncompleteTasks';
import { CompleteTasks } from './CompleteTasks';

export const TaskList = () => {
  return (
    <section>
      <h2>Task List</h2>
      <IncompleteTasks />
      <CompleteTasks />
    </section>
  )
}