import React from 'react';
import { useSelector } from 'react-redux';

const TotalCompleteItems = () => {
  const taskList = useSelector((store) => store.tasks.items);
  const completedTasks = taskList.filter((task) => task.isDone === true);

  return (
    <section className="tasks-completed">
      <h4>Tasks completed {completedTasks.length}/{taskList.length}</h4>
    </section>
  );
}

export default TotalCompleteItems