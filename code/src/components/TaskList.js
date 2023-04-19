import React from 'react';
import { useSelector } from 'react-redux';
import TaskListItem from './TaskListItem';

const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.items);
  return (
    <section>
      {taskList.map((eachTask) => {
        return (
          <TaskListItem key={eachTask.id} text={eachTask.text} task={eachTask} />
        )
      })}
    </section>
  )
};

export default TaskList;