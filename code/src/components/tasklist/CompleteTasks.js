import { EachTask } from 'components/eachTask/EachTask';
import React from 'react';
import { useSelector } from 'react-redux';
import { CompleteListStyles } from './TaskList.styles';
// import { tasks } from 'reducers/tasks';

export const CompleteTasks = () => {
  const taskList = useSelector((store) => store.tasks.items)
  const completeTasks = taskList.filter((item) => item.complete === true)
  // const dispatch = useDispatch();
  return (
    <CompleteListStyles>
      <h3>All Done</h3>
      <section>
        {completeTasks.length === 0 && (
          <img src="assets/wateringideas.jpg" alt="watering" />
        )}
        {completeTasks.map((singleTask) => (
          <EachTask key={singleTask.id} singleTask={singleTask} />
        ))}
      </section>
    </CompleteListStyles>
  )
}