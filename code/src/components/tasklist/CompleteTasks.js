import { EachTask } from 'components/eachTask/EachTask';
import React from 'react';
import { useSelector } from 'react-redux';
// import { tasks } from 'reducers/tasks';

export const CompleteTasks = () => {
  const taskList = useSelector((store) => store.tasks.items)
  const completeTasks = taskList.filter((item) => item.complete === true)
  // const dispatch = useDispatch();
  return (
    <section>
      <h3>Complete Tasks</h3>
      <ul>
        {completeTasks.map((singleTask) => (
          <EachTask key={singleTask.id} singleTask={singleTask} />
        ))}
      </ul>
    </section>
  )
}