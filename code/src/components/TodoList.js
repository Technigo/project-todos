import React from 'react'
import { useSelector } from 'react-redux'

import { TodoInput } from 'components/TodoInput'
import { TodoItem } from 'components/TodoItem'
import { TodoSummary } from 'components/TodoSummary'



export const TodoList = () => {
  const list = useSelector(store => store.todos.list);


  return (
    <section>
      <h1>My todos:</h1>
      <TodoInput />
      {list.items.map((item, index) => (
        <TodoItem itemIndex={index}></TodoItem>
      ))}
      <TodoSummary />
    </section>
  );
};