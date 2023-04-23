import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks'
import { Checkbox } from './styles/Checkbox';
import { IconButton } from './styles/IconButton';
import { TaskListWrapper, SingleTaskWrapper } from './TaskListStyles';

export const TaskList = () => {
  // FUNCTIONALITY
  const taskList = useSelector((store) => store.tasks.items)
  const dispatch = useDispatch()
  const onTaskToggle = (taskId) => {
    dispatch(tasks.actions.toggleTask({ taskId }));
  }
  const onRemoveTask = (taskId) => {
    dispatch(tasks.actions.deleteTask({ taskId }));
  }

  return (
    <TaskListWrapper>
      <ul>
        {taskList.map((singleTask) => {
          const deadlineDate = singleTask.deadlineDate ? new Date(singleTask.deadlineDate).toLocaleDateString('sv-SE') : '';
          return (
            <SingleTaskWrapper key={singleTask.id}>
              <Checkbox
                taskId={singleTask.id}
                checked={singleTask.isDone}
                onChange={() => onTaskToggle(singleTask.id)} />
              <li>
                {singleTask.text}
                {singleTask.time}
                {deadlineDate && (
                  <span>
                    Deadline: {deadlineDate}
                  </span>
                )}
              </li>
              <IconButton type="button" onClick={() => onRemoveTask(singleTask.id)}>
                <svg width="30px" height="30px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </IconButton>
            </SingleTaskWrapper>

          )
        })}
      </ul>
    </TaskListWrapper>
  )
}