import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import TaskTracker from 'components/TaskTracker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { SingleTaskWrapper, SingleTaskChild, CheckboxInput } from './TaskListStyling';

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
              <SingleTaskWrapper
                key={singleTask.id}
                style={{ backgroundColor: singleTask.isComplete ? '#ccffcc' : '#fbd0d0' }}>
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
                  smallBtn
                  type="button"
                  onClick={() => handleDeletingTask(singleTask.id)}>
                  <FontAwesomeIcon icon={faTrash} size="lg" />
                </Button>
              </SingleTaskWrapper>
            ))}
          </div>
        ))}
      </section>
    );
  }
};

export default TaskList;