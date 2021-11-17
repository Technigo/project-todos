import React from 'react';
import { useSelector } from 'react-redux';

const TaskCounter = () => {
  const uncompleteTaskCounter = useSelector((state) =>
    state.tasks.items.filter((item) => item.complete === false)
  );
  return <div>You have {uncompleteTaskCounter.length} left to do</div>;
};

export default TaskCounter;
