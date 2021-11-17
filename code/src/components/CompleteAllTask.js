import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';

const CompleteAllTask = () => {
  const items = useSelector((store) => store.tasks.items);
  const dispatch = useDispatch();

  const onCompleteAllTask = (items) => {
    dispatch(tasks.actions.completeAllTask(items));
  };
  return <button onClick={() => onCompleteAllTask(items)}>Complete All</button>;
};

export default CompleteAllTask;
