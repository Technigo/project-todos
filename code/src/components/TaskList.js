import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import styled from 'styled-components';
import TaskTracker from 'components/TaskTracker';
import EmptyList from './EmptyList';
import { Button } from './Button';

const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.items);
  const emptyList = useSelector((store) => store.tasks.isEmpty);
  const totalTasks = taskList.length;
  const dispatch = useDispatch();

  const handleCheckboxChange = (id) => {
    dispatch(tasks.actions.toggleComplete({ id }));
  };

  const handleDeletingTask = (id) => {
    dispatch(tasks.actions.deleteTask({ id }));
  };

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

  if (emptyList || totalTasks === 0) {
    return (
      <EmptyList />
    )
  } else {
    return (
      <section>
        <TaskTracker />
        {/* Object.entries(groupedTasks) method is used to convert the groupedTasks
       object into an array of key-value pairs, where the key is the category name
      and the value is the array of tasks. */}
        {Object.entries(groupedTasks).map(([category, tasksArray]) => (
          <div key={category}>
            <h2>{category}</h2>
            {/* sort & move completed tasks to the bottom of the list in each category */}
            {tasksArray.sort((a) => (a.isComplete ? 1 : -1)).map((singleTask) => (
              <SingleTaskWrapper key={singleTask.id}>
                <CheckboxInput
                  type="checkbox"
                  checked={singleTask.isComplete}
                  onChange={() => handleCheckboxChange(singleTask.id)} />
                <SingleTaskChild>
                  <p>{singleTask.name}</p>
                  <p>Created: {singleTask.timeStamp}</p>
                  <p>Due: {singleTask.dueDate}</p>
                </SingleTaskChild>
                <Button
                  binBtn
                  type="button"
                  onClick={() => handleDeletingTask(singleTask.id)}>
                🗑️
                </Button>
              </SingleTaskWrapper>
            ))}
          </div>
        ))}
      </section>
    );
  }
};

const SingleTaskWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 5px;
gap:1rem;
/* border: solid green; */
`;

const SingleTaskChild = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
margin-left: 0;
/* border: solid green; */
`;

const CheckboxInput = styled.input`
  /* appearance: none; */
  width: 1rem;
  height: 1rem;
  border: 2px solid #000;
  border-radius: 50%;
  background-color: #fff;
  /* Change color of the checkbox when checked */
  /* &:checked {
    background-color: #000;
  } */
`;

export default TaskList;