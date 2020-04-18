import React, { useState } from 'react';
import { ToDoInput } from './todoinput';
import { ToDoItem } from './todoitem';
import { Summary } from './todosummary';
import { useSelector, useDispatch } from 'react-redux';
import { todos } from '../reducers/todos.js';
import { CompletedTasks } from './completedtodolist';

export const ToDoList = () => {
  // Pick up things from the store
  const list = useSelector((store) => store.todos.list);

  const { reset, setReset } = useState('');

  const dispatch = useDispatch();

  const resetall = () => {
    dispatch(
      todos.actions.setReset({
        reset: reset,
        setReset: setReset,
      })
      // return {
      //   type: 'RESET_ITEM',
      // };
    );
  };

  return (
    <div>
      hello todolist-component. Here you can start adding your todoItems
      <ToDoInput />
      {list.items.map((item, index) => (
        <ToDoItem item={item} itemIndex={index} />
      ))}
      <Summary />
      <CompletedTasks />
      <button onClick={resetall}>reset</button>
    </div>
  );
};
