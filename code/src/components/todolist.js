import React, { useState } from 'react';
import { ToDoInput } from './todoinput';
import { ToShopInput } from './toshopinput';
import { ToDoItem } from './todoitem';
import { Summary } from './todosummary';
import { useSelector, useDispatch } from 'react-redux';
import { todos } from '../reducers/todos.js';
import { CompletedTasks, CompletedShopping } from './completedtodolist';
import '../index.css';

export const ToDoList = () => {
  // Pick up things from the store
  const list = useSelector((store) => store.todos.list);

  const { reset, setReset } = useState('');

  const dispatch = useDispatch();

  // will remove all items in the store
  const resetall = () => {
    dispatch(
      todos.actions.setReset({
        reset: reset,
        setReset: setReset,
      })
    );
  };

  return (
    <main className='main'>
      <h1>Stuff to do</h1>
      <section className='additems'>
        <article className='additem addtodo'>
          <ToDoInput />
        </article>
        <article className='additem addtoshop'>
          <ToShopInput />
        </article>
      </section>
      <Summary />
      {list.items.map((item, index) => (
        <ToDoItem item={item} itemIndex={index} />
      ))}
      <section className='completed'>
        <CompletedTasks />
        <CompletedShopping />
      </section>

      <button className='reset' onClick={resetall}>
        reset
      </button>
    </main>
  );
};
