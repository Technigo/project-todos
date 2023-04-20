/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { useSelector } from 'react-redux';
import { Alert, AlertTitle, Paper } from '@mui/material';

const TaskStatus = () => {
  const taskList = useSelector((store) => store.tasks.items);
  const completed = taskList.filter((task) => task.completed === true);
  const unfinished = taskList.filter((task) => task.completed === false);

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
            {completed.length} / {taskList.length} todo's completed,
            {completed.length > unfinished.length ? ' keep up the good work - almost done!' : ' keep that focus - what will be checked off next?'}
          </Paper>
        )}
    </>
  )
};

export default TaskStatus;