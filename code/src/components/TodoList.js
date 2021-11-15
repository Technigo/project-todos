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
      <section>
        {items.map(item => (
          <div className='flex-item' key={item.id}>
            <div>
              {' '}
              <p>{item.text}</p> {moment(item.createdAt).format('LL')}
            </div>
            <input
              type='checkbox'
              checked={item.isComplete}
              onChange={() => onToggleTodo(item.id)}
            />

            <button onClick={() => onDeleteTodo(item.id)}>X</button>
          </div>
        ))}
      </section>
    );
  return <p>NO TODOS</p>;
};

export default TodoList;
