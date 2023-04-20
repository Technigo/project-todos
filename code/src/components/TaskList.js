import React from 'react';
import { useSelector } from 'react-redux';
import { Collapse, List, Paper } from '@mui/material';
import { TransitionGroup } from 'react-transition-group';
import TaskListItem from './TaskListItem';

const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.items);

  return (
    <Paper elevation={4} style={{ margin: '20px', opacity: '0.9' }}>
      <List style={{ maxHeight: '400px', overflowY: 'scroll' }}>
        <TransitionGroup>
          {taskList.map((eachTask) => {
            return (
              <Collapse key={eachTask.id}>
                <TaskListItem
                  checked={eachTask}
                  text={eachTask.text}
                  task={eachTask} />
              </Collapse>
            )
          })}
        </TransitionGroup>
      </List>
    </Paper>
  )
};

export default TaskList;