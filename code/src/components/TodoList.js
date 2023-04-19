/* eslint-disable linebreak-style */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todos } from 'reducers/todos';

export const TodoList = () => {
  const todoList = useSelector((store) => store.todos.items);
  const dispatch = useDispatch();
  return (
    <section>
      <ul>
        {todoList.map((singleTodo) => {
          return (
            <>
              <li key={singleTodo.id}>{singleTodo.task}</li>
              <input
                onChange={() => dispatch(todos.actions.completeTodo(singleTodo.id))}
                type="checkbox"
                checked={singleTodo.isDone} />
              <button
                onClick={() => dispatch(todos.actions.removeTodo(singleTodo))}
                type="button">🗑️
              </button>
            </>)
        })}
      </ul>
    </section>
  )
}