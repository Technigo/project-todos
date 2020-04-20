import React from 'react';
import { useSelector } from 'react-redux'
import { AddTodo } from './AddTodo';
import { TodoItem } from './TodoItem';
import { TodoHeader } from './TodoHeader';

export const TodoList = () => {
  const list = useSelector(store => store.todos.list);

  return (
    <section>
      <TodoHeader />
      <AddTodo />
      {list.items.map((item, index) => <TodoItem item={item} itemIndex={index} />)}
    </section>
  )
};

