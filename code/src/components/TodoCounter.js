import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
/* import completed from 'reducers/completed'; */
import uncompleted from 'reducers/uncompleted';

export const TodoCounter = () => {
  const dispatch = useDispatch();
  const allUncompletedTasks = useSelector((store) => store.uncompleted.tasks);
  const numberOfUncompletedTasks = allUncompletedTasks.length;

  console.log(allUncompletedTasks);

  const clearAllTasks = () => {
    /* Add dispatch to Completed tasks */
    dispatch(uncompleted.actions.clearAll());
  };

  return (
    <div className="counter-div">
      {numberOfUncompletedTasks >= 1 ? (
        <p>OMG! U got {numberOfUncompletedTasks} unfinished task/s 😱</p>
      ) : (
        <p>Hooray! U got {numberOfUncompletedTasks} tasks left. Go out and enjoy the sun! 😎</p>
      )}
      <button
        className="clear-list"
        type="button"
        onClick={clearAllTasks}>Untask yourself!
      </button>
    </div>
  )
};