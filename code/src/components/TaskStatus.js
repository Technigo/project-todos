/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { useSelector } from 'react-redux';
import { Alert, AlertTitle, Paper } from '@mui/material';

const TaskStatus = () => {
  const taskList = useSelector((store) => store.tasks.items);
  const completed = taskList.filter((task) => task.completed === true);

  return (
    <>
      {completed.length === taskList.length ? (
        <Alert severity="success" style={{ margin: '20px', padding: '20px' }}>
          <AlertTitle>All done</AlertTitle>
          Great job, all todo's are done!
        </Alert>
      )
        : (
          <Paper elevation={4} style={{ margin: '20px', padding: '20px', opacity: '0.9' }}>
            {completed.length} / {taskList.length} todo's completed, keep up the good work!
          </Paper>
        )}
    </>
  )
};

export default TaskStatus;