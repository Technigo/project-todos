import React from 'react';
import { useDispatch } from 'react-redux';
import todos from 'reducers/todo';

export const SingleTodo = ({ todo }) => {
  const dispatch = useDispatch()
  return (
    <div className="todo-wrapper">
      <input
        type="checkbox"
        onCheck={() => dispatch(todos.action.addItem(todo))}
        id=""
        name="todos" />
    </div>
  )
}