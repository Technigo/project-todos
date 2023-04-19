import React from 'react';
import { useSelector } from 'react-redux';
import { List, Paper } from '@mui/material';
import TaskListItem from './TaskListItem';

const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.items);
  return (
    <Paper style={{ margin: '20px' }}>
      <List>
        {taskList.map((eachTask) => {
          return (
            <TaskListItem key={eachTask.id} text={eachTask.text} task={eachTask} />
          )
        })}
      </List>
    </Paper>
  )
};

export default TaskList;