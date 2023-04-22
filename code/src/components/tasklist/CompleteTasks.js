import { EachTask } from 'components/eachTask/EachTask';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ButtonStyles } from 'components/buttons/Buttons.styles';
import { tasks } from 'reducers/tasks';
import { CompleteListStyles } from './TaskList.styles';

export const CompleteTasks = () => {
  const taskList = useSelector((store) => store.tasks.items)
  const completeTasks = taskList.filter((item) => item.complete === true)
  const dispatch = useDispatch();
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
      <ButtonStyles type="button" onClick={() => dispatch(tasks.actions.sortCategories())}>Sort by Category</ButtonStyles>
    </CompleteListStyles>
  )
}