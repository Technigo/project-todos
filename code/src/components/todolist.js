import React from 'react';
import { ToDoInput } from './todoinput';
import { ToDoItem } from './todoitem';
import { useSelector } from 'react-redux';

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
    </div>
  );
};
