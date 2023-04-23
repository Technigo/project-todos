import React from 'react';
import { useSelector } from 'react-redux';

const TotalCompleteItems = () => {
  const taskList = useSelector((store) => store.tasks.items);
  const completedTasks = taskList.filter((task) => task.isDone === true);

  return (
    <section className="tasks-completed">
      <h2>Tasks completed {completedTasks.length}/{taskList.length}</h2>
    </section>
  );
}

export default TotalCompleteItems