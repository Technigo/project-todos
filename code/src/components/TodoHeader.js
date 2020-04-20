import React from 'react';
import { ClearButton } from './ClearButton';
import { TodoSummary } from './TodoSummary';
import moment from 'moment';

export const TodoHeader = () => {
  return(
    <section>
      <h1>Todo</h1>
      <h2>{moment().format('MMMM Do')}</h2>
      <TodoSummary />
      <ClearButton />
    </section>
  )
}