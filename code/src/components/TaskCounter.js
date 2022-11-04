import React from 'react';
import { useSelector } from 'react-redux';

const TaskCounter = () => {
  const totalTaskCounter = useSelector((store) => store.tasks.items);
  const finished = totalTaskCounter.filter((item) => item.isChecked);
  const tasksNoun = totalTaskCounter.length !== 1 ? 'tasks' : 'task';
  /* const headingText = `${totalTaskCounter.length} ${tasksNoun} remaining`; */
  /*  const titleFilter = () => {
    if (totalTaskCounter === 0) {
      return (
        <p>ALL DONE! Add some tasks!</p>
      )
    } else {
      <p>{finished.length} of {totalTaskCounter.length} {tasksNoun} completed</p>
    }
  } */
  return (
    <div>
      {finished.length} of {totalTaskCounter.length} {tasksNoun} completed
    </div>
  );
};

export default TaskCounter;

