import React from 'react';
import { ToDoInput } from './todoinput';
import { ToDoItem } from './todoitem';
import { Summary } from './todosummary';
import { useSelector } from 'react-redux';
import { CompletedTasks } from './completedtodolist';

export const ToDoList = () => {
  // Pick up things from the store
  const list = useSelector((store) => store.todos.list);
  return (
    <div>
      hello todolist-component. Here you can start adding your todoItems
      <ToDoInput />
      {list.items.map((item, index) => (
        <ToDoItem item={item} itemIndex={index} />
      ))}
      <Summary />
      <CompletedTasks />
    </div>
  );
};
