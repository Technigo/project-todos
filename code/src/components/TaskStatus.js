import React from 'react';
import { useSelector } from 'react-redux';
import { Paper } from '@mui/material';

const TaskStatus = () => {
  const taskList = useSelector((store) => store.tasks.items);
  const unfinished = taskList.filter((task) => task.completed === false);

  if (unfinished.length === taskList.length) {
    return (alert('All done!'))
  }

  return (
    <Paper elevation={4} style={{ margin: '20px', padding: '20px', opacity: '0.9' }}>
      {unfinished.length} / {taskList.length} completed
    </Paper>
  )
};

export default TaskStatus;