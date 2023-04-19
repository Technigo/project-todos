import React from 'react';
import { AddTask } from 'components/AddTask';
import { Tasklist } from 'components/Tasklist';
import { Header } from './Header';

export const TodoApp = () => {
  return (
    <section>
      <Header />
      <AddTask />
      <Tasklist />
    </section>
  )
}