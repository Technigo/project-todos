import React from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import todos from '../reducers/todos';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <input 
        type="checkbox"
        checked={todo.isComplete}
        onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
      />
      <p>{todo.content}</p> 
      <button onClick={() => dispatch(todos.actions.removeTodo(todo.id))}>
        Delete
      </button>
      <p>{moment(todo.content.createdAt).fromNow()}</p>
    </div>
  );
};

export default Todo;