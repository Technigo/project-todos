import React from 'react';
import { useSelector } from 'react-redux';
import './TasksComplete.css';

const TotalCompleteItems = () => {
  const taskList = useSelector((store) => store.tasks.items);
  const completedTasks = taskList.filter((task) => task.isDone === true);

  return (
    <section className="complete-wrapper">
      <h3>Tasks done for today - {completedTasks.length}/{taskList.length}</h3>
    </section>
  );
}

export default TotalCompleteItems;
