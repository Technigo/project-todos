import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import todos from '../reducers/todos';

const Header = () => {
  const items = useSelector(store => store.todos.items);
  const completedTasks = items.filter(items => items.isComplete);
  const dispatch = useDispatch();

  const onButtonClick = () => {
    if (completedTasks.length === items.length) {
      dispatch(todos.actions.uncompleteAll());
    } else {
      dispatch(todos.actions.completeAll());
    }
  };

  return (
    <div>
      <h1>TODO</h1>
      <div className='todos-done'>
        tasks done: {completedTasks.length}/{items.length}
      </div>
      <div className='check-all'>
        <button className='complete-all-button' onClick={onButtonClick}>
          {completedTasks.length === items.length ? 'Uncheck all' : 'Check all'}
        </button>
      </div>
    </div>
  );
};
export default Header;
