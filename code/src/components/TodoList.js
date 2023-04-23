/* eslint-disable linebreak-style */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import todos from 'reducers/todo';

const TodoList = () => {
  const todoList = useSelector((store) => store.todos.items)
  const dispatch = useDispatch();
  const onDeleteSingleTodoButtonClick = (id) => {
    dispatch(todos.actions.deleteSingleTodo(id));
  }
  const onIsDoneCheckboxToggle = (id) => {
    dispatch(todos.actions.toggeIfTodoIsDone(id));
  }
  return (
    <section>
      <ul>
        {
          todoList.map((singleTodo) => {
            return (
              <li key={singleTodo.id}>
                <p><span>{singleTodo.name}</span>
                  <button type="button" onClick={() => onDeleteSingleTodoButtonClick(singleTodo.id)}>Delete this todo</button>
                  <label htmlFor={`todo_id${singleTodo.id}`}>
                    Have you done this?
                    <input id={`todo_id${singleTodo.id}`} type="checkbox" value={singleTodo.isDone} onChange={() => onIsDoneCheckboxToggle(singleTodo.id)} />
                  </label>
                </p>
              </li>)
          })
        }
      </ul>
    </section>
  )
}

export default TodoList;