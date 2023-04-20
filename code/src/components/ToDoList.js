/* eslint-disable no-undef */
/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { todos } from 'redux/reducers/todos';
import { ToDoItem } from './ToDoItem';
import { AddToDo } from './AddToDo';

export const ToDoList = () => {
  const dispatch = useDispatch();
  const allTodos = useSelector((store) => store.todos.items);

  const onDone = (id) => {
    dispatch(todos.actions.deleteItem(todoIndex));
  };

  const onDelete = (todoIndex) => {
    dispatch(todos.actions.deleteItem(todoIndex));
  };

  const onCompleteAll = () => {
    allTodos.forEach((todo) => {
      if (!todo.isDone) {
        dispatch(todos.actions.toggleItem(todo.id));
      }
    });
  };

  const onClearAll = () => {
    if (window.confirm('Do you really want to delete all to-dos?')) {
      dispatch(todos.actions.clearAll());
    }
  };

  const todosTodo = allTodos.filter((todo) => !todo.isDone);
  const doneTodos = allTodos.filter((todo) => todo.isDone);

  return (
    <section>
      {/* <ul>
        {allTodos.map((singleToDo) => {
          return <li key={singleToDo.id}>{singleToDo.name}</li>
        })}
      </ul> */}
      <h2>To-do ({todosTodo.length})</h2>

      {todosTodo.lenghth === 0 && <p>All done - great job! ✨</p>}

      {todosTodo.map((todo, index) => (
        <ToDoItem todo={todo} index={index} key={todo.id} onDelete={onDelete} onDone={onDone} />
      ))}

      <AddToDo />

      <h2>Done ({doneTodos.lenght})</h2>

      <button type="button" onClick={onCompleteAll}>
        Complete all to-dos
      </button>

      <button type="button" onClick={onClearAll}>
        Clear all to-dos
      </button>

      {doneTodos.map((todo, index) => (
        <ToDoItem todo={todo} index={index} key={todo.id} onDelete={onDelete} onDone={onDone} />
      ))}
      {/* <ul>
        {todoList.map((singleToDo) => {
          return <li key={singleToDo.id}>{singleToDo.name}</li>
        })}
      </ul> */}
    </section>
  );
};
