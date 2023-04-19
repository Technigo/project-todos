import { EachTask } from 'components/eachTask/EachTask';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';

export const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.items)
  const dispatch = useDispatch();
  return (
    <section>
      <h2>Task List</h2>
      <ul>
        {taskList.map((singleTask) => (
          <EachTask key={singleTask.id} singleTask={singleTask} />
        ))}
      </ul>
      <button type="button" onClick={() => dispatch(tasks.actions.completeAll())}>Complete All</button>
    </section>
  )
}