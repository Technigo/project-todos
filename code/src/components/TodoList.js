/* eslint-disable linebreak-style */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todos } from 'reducers/todos';

export const TodoList = () => {
  const todoList = useSelector((store) => store.todos.items);
  const dispatch = useDispatch();
  const amountOfTasks = useSelector((store) => store.todos.items);
  const amountOfCompleted = amountOfTasks.filter((task) => task.isDone)
  return (
    <>
      <ul>
        {todoList.map((singleTodo) => {
          return (
            <div className="list-item" key={singleTodo.id}>
              <input
                onChange={() => dispatch(todos.actions.completeTodo(singleTodo.id))}
                name="newTodo"
                type="checkbox"
                id={singleTodo.id}
                checked={singleTodo.isDone} />
              <li key={singleTodo.id}>{singleTodo.task}</li>
              <button
                onClick={() => dispatch(todos.actions.removeTodo(singleTodo))}
                type="button"
                key="remove-button">➖
              </button>
            </div>)
        })}
      </ul>
      <p className="counter">{amountOfCompleted.length} / {amountOfTasks.length} completed</p>
    </>
  )
}