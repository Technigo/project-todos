import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Moment from 'moment';

import todos from '../reducers/todos';
import BackgroundGif from './BackgroundGif';

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
  const onCheckAllTodo = () => {
    dispatch(todos.actions.checkAllTodo());
  };

  if (items.length > 0 || items.complete > 1)
    return (
      <section className='todo'>
        {items.map((item) => (
          <div className={item.isComplete ? 'done' : 'not-done'} key={item.id}>
            <div className='left-todo'>
              <div className='todo-text'>{item.text}</div>
              <p>
                <span className='created-at'>
                  {Moment(item.createdAt).format('hh:mm:ss')}
                </span>
                <span className='created-at-day'>
                  {Moment(date).format('dddd')}
                </span>
              </p>
            </div>
            <div className='seperator'></div>
            <div className='right-todo'>
              <input
                className='checkbox'
                type='checkbox'
                checked={item.isComplete}
                onChange={() => onToggleTodo(item.id)}
              />

              <button
                className='delete-todo'
                onClick={() => onRemoveTodo(item.id)}
              >
                <span className='delete-x'>❌</span>
              </button>
            </div>
          </div>
        ))}
        <div className='delete-check'>
          <button className='clear-todo' onClick={() => onClearTodo(items.id)}>
            <span>delete all</span>
          </button>
          <button className='clear-todo' onClick={() => onCheckAllTodo(items)}>
            <span>check all</span>
          </button>
        </div>
      </section>
    );
  return (
    <div
      className='no-todos'
      style={{
        backgroundColor: 'rgb(167, 225, 234)',
      }}
    >
      <BackgroundGif />
      <h2 className='no-todos-text'>
        You dont have anything to do please add some todos!
      </h2>
    </div>
  );
};

export default TodoList;
