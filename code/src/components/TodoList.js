/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import todos from 'reducers/todos';

const TodoList = () => {
  const todoList = useSelector((store) => store.todos.items)
  const dispatch = useDispatch();
  const onIsDoneToggle = (id) => {
    dispatch(todos.actions.toggleTodoItem(id))
  }
  return (
    <div>
      <h1>My to do list</h1>
      {todoList.map((singleTodo) => {
        return (
          <>
            <h2>{singleTodo.name}</h2>
            <input
              type="checkbox"
              checked={singleTodo.isDone}
              onChange={() => onIsDoneToggle(singleTodo.id)} />
            <label>is this done?</label>
            <button type="button">Remove</button>
          </>
        )
      })}
    </div>
  )
}

export default TodoList