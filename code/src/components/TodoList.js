import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import todos from 'reducers/todos';

const TodoList = () => {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.todos.items);

  return (
    <div className='todos-container'>
      {items.map((todo) => (
        <div key={todo.id} className='todo-item'>
          <input
            type='checkbox'
            checked={todo.isComplete}
            onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
          />
          <p className='todo-description'>{todo.description}</p>
          <p className='date'>
            {moment(todo.createdAt).format('dddd, D/M, k:mm')}
          </p>
          <button
            className='delete-button'
            onClick={() => dispatch(todos.actions.removeTodo(todo.id))}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
