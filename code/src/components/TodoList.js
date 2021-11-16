import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import todos from '../reducers/todos';

const TodoList = () => {
  const items = useSelector(store => store.todos.items); // store.the slice. items from slice

  const dispatch = useDispatch();

  const onToggleTodo = id => {
    dispatch(todos.actions.toggleTodo(id));
  };

  const onDeleteTodo = id => {
    dispatch(todos.actions.deleteTodo(id));
  };
  if (items.length > 0)
    return (
      <section className='todos-added'>
        {items.map(item => (
          <div className='flex-item' key={item.id}>
            <input
              type='checkbox'
              checked={item.isComplete}
              onChange={() => onToggleTodo(item.id)}
            />

            <p className={item.isComplete ? 'done ' : 'not-done '}>
              {item.text}
            </p>
            <p
              className={
                item.isComplete ? 'done todo-date ' : 'not-done todo-date '
              }
            >
              {moment(item.createdAt).format('LL')}
            </p>

            <button
              className='delete-button'
              onClick={() => onDeleteTodo(item.id)}
            >
              <span role='img' aria-label='Delete'>
                🗑️
              </span>
            </button>
          </div>
        ))}
      </section>
    );
  return (
    <div className='no-todos'>
      <p>NO TODOS</p>
      <i className='fas fa-hand-peace'></i>
    </div>
  );
};

export default TodoList;
