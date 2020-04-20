import React from 'react';
import { useSelector } from 'react-redux'
import { ClearButton } from './ClearButton';
import { AddTodo } from './AddTodo';
import { TodoItem } from './TodoItem';
import { TodoSummary } from './TodoSummary';

export const TodoList = () => {
  const list = useSelector(store => store.todos.list);

  return (
    <section>
      <ClearButton />
      <AddTodo />
      {list.items.map((item, index) => <TodoItem item={item} itemIndex={index} />)}
      <TodoSummary />
    </section>
  )
};