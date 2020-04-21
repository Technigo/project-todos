import React from 'react';
import { useSelector } from 'react-redux'
import { AddTodo } from './AddTodo';
import { TodoItem } from './TodoItem';
import { TodoHeader } from '../components/TodoHeader';

export const TodoList = ({projectName}) => {
  const list = useSelector(store => store.todos[projectName]);

  return (
    <section>
      <TodoHeader projectName={projectName} />
      <AddTodo projectName={projectName} />
      {list.map((item, index) => <TodoItem key={index} projectName={projectName} item={item} itemIndex={index} />)}
    </section>
  )
};
