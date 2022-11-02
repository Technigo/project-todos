import React from 'react';
import { TaskList } from 'components/TaskList';
import { AddTask } from 'components/AddTask';
import { Link } from 'react-router-dom'

export const NeedToDo = () => {
  return (
    <section>
      <TaskList />
      <AddTask />
      <Link to="/"><button type="button">Homepage</button></Link>
    </section>
  )
}