/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import cat from 'reducers/cat';
import tasks from 'reducers/tasks';
import { useDispatch, useSelector } from 'react-redux';

const TaskFormCheckbox = ({ task }) => {
  const dispatch = useDispatch();
  const taskListLength = useSelector((store) => store.tasks.tasks).length;
  return (
    <input
      id={task.id}
      onChange={() => {
        // Changes cat to 'amazing' if task gets completed, otherwise no change
        if (!task.isComplete) {
          dispatch(cat.actions.changeCatAndPrevious('amazing'));

          setTimeout(() => {
            if (taskListLength === 0) {
              dispatch(cat.actions.changeCat('angel'));
            } else if (taskListLength > 0 && taskListLength <= 4) {
              dispatch(cat.actions.changeCat('stressed'));
            } else if (taskListLength > 4 && taskListLength <= 9) {
              dispatch(cat.actions.changeCat('dizzy'));
            } else if (taskListLength > 9) {
              dispatch(cat.actions.changeCat('dead'));
            }
          }, 1000);
        }
        dispatch(tasks.actions.toggleComplete(task.id));
      }}
      type="checkbox"
      checked={task.isComplete}
      name="tasks"
    />
  );
};

export default TaskFormCheckbox;
