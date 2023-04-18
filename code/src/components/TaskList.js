import React from 'react';
import { useSelector } from 'react-redux';
import { List } from '@mui/material';

const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.items);
  return (
    <section>
      <ul>
        {taskList.map((eachTask) => {
          return (
            <List key={eachTask.id}>{eachTask.text}</List>
          )
        })}
      </ul>
    </section>
  )
};

export default TaskList;