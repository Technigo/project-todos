import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RemoveAll } from './RemoveAll';

import moment from 'moment';

import todos from '../reducers/todos';

const Header = () => {
  const items = useSelector(store => store.todos.items);
  const completedTasks = items.filter(items => items.isComplete);
  const dispatch = useDispatch();

  const onButtonClick = () => {
    // this checks if the number of completed tasks is equal to number of tasks, if true, then we can "un-check" them, else we can check them
    if (completedTasks.length === items.length) {
      dispatch(todos.actions.uncompleteAll());
    } else {
      dispatch(todos.actions.completeAll());
    }
  };

  return (
    <div>
      <h1>TODOS</h1>
      <div className='time-date'>
        <p className='date-today'>{moment().format('dddd')}</p>
        <p className='time-today'> {moment().format('HH:mm')} </p>
      </div>
      <div className='todos-done'>
        tasks done: {completedTasks.length}/{items.length}
      </div>
      <div className='check-all'>
        <button className='complete-all-button' onClick={onButtonClick}>
          {completedTasks.length === items.length ? 'Uncheck all' : 'Check all'}
        </button>
        <RemoveAll />
      </div>
    </div>
  );
};
export default Header;
