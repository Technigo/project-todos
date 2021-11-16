import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Moment from 'moment';

import todos from '../reducers/todos';

const TodoList = () => {
  const items = useSelector((store) => store.todos.items);
  const date = Moment();

  const dispatch = useDispatch();

  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id));
  };

  const onRemoveTodo = (id) => {
    dispatch(todos.actions.removeToDo(id));
  };
  const onClearTodo = (id) => {
    dispatch(todos.actions.clearTodo(id));
  };
  // const CurrentDate = Moment().valueOf();
  // const CurrentDate = new Date(0);

  return (
    <section className='todo'>
      {items.map((item) => (
        <div className='todo-item' key={item.id}>
          <p>{item.text}</p>
          <div className='todo-container'>
            <input
              type='checkbox'
              checked={item.isComplete}
              onChange={() => onToggleTodo(item.id)}
            />
            <button
              className='delete-todo'
              onClick={() => onRemoveTodo(item.id)}
            >
              <span>REMOVE</span>
            </button>
            {/* <p>{CurrentDate}</p> */}
            {/* {Moment().format('ddd, hA')}; */}
            {/* <p>{Moment().format('MM/DD/YYYY')}</p> */}
          </div>
        </div>
      ))}
      <button className='clear-todo' onClick={() => onClearTodo(items.id)}>
        <span>CLEAR ALL</span>
      </button>
    </section>
  );
};

export default TodoList;
