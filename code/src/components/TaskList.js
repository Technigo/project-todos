import React from 'react';
import { useSelector } from 'react-redux';

const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.items);
  return (
    <section>
      <ul>
        {taskList.map((eachTask) => {
          return (
            <li key={eachTask.id}>{eachTask.text}</li>
          )
        })}
      </ul>
    </section>
  )
};

export default TaskList;