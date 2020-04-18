import React from 'react'
import { useSelector } from 'react-redux'

import { TodoInput } from 'components/TodoInput'
import { TodoItem } from 'components/TodoItem'



export const TodoList = () => {
  const list = useSelector(store => store.todos.list);


  return (
    <section>
      <TodoInput />
      {list.items.map((item, index) => (
        <TodoItem itemIndex={index}></TodoItem>
      ))}
    </section>
  );
};