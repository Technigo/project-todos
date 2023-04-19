import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import styled from 'styled-components';

const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.items);
  const dispatch = useDispatch();

  const handleCheckboxChange = (id) => {
    dispatch(tasks.actions.toggleComplete({ id }));
  };

  const handleDeletingTask = (id) => {
    dispatch(tasks.actions.deleteTask({ id }));
  };

  // move completed tasks to the bottom of the task list
  // const sortedTaskList = [...taskList].sort((a, b) => {
  //   if (a.isComplete && !b.isComplete) {
  //     return 1;
  //   } else if (!a.isComplete && b.isComplete) {
  //     return -1;
  //   } else {
  //     return 0;
  //   }
  // });

  // Group tasks by category
  const groupedTasks = taskList.reduce((acc, task) => {
    if (task.category) {
      if (!acc[task.category]) {
        acc[task.category] = [];
      }
      acc[task.category].push(task);
    } else {
      if (!acc.Other) {
        acc.Other = [];
      }
      acc.Other.push(task);
    }
    return acc;
  }, {});

  return (
    <section>
      {Object.entries(groupedTasks).map(([category, theTasks]) => (
        <div key={category}>
          <h2>{category}</h2>
          {theTasks.map((singleTask) => (
            <SingleTaskWrapper key={singleTask.id}>
              <input
                type="checkbox"
                checked={singleTask.isComplete}
                onChange={() => handleCheckboxChange(singleTask.id)} />
              <p>{singleTask.name}</p>
              <p>Created: {singleTask.timeStamp}</p>
              <p>Due: {singleTask.dueDate}</p>
              <button
                type="button"
                onClick={() => handleDeletingTask(singleTask.id)}>
                Delete
              </button>
            </SingleTaskWrapper>
          ))}
        </div>
      ))}
    </section>
  );
};

const SingleTaskWrapper = styled.div`
width: 20vw;
display: flex;
flex-direction: row;
`
export default TaskList;