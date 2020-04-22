import React from 'react';
import { useSelector } from 'react-redux'
import { AddTodo } from './AddTodo';
import { TodoItem } from './TodoItem';
import { TodoHeader } from '../components/TodoHeader';
import { TodoLists } from '../lib/Containers'

export const TodoList = ({projectName}) => {
  const list = useSelector(store => store.todos[projectName]);

  return (
    <TodoLists>
      <TodoHeader projectName={projectName} />
      <AddTodo projectName={projectName} />
      {list.map((item, index) => <TodoItem key={index} projectName={projectName} item={item} itemIndex={index} />)}
    </TodoLists>
  )
};
