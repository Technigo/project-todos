import { ButtonStyles } from 'components/buttons/Buttons.styles';
import { EachTask } from 'components/eachTask/EachTask';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';
import { IncompleteListStyles } from './TaskList.styles';

export const IncompleteTasks = () => {
  const taskList = useSelector((store) => store.tasks.items)
  const incompleteTasks = taskList.filter((item) => item.complete === false)
  const dispatch = useDispatch();
  return (
    <IncompleteListStyles>
      <h3>To Do</h3>
      <section>
        {incompleteTasks.length === 0 && (
          <img src="assets/checklist.jpg" alt="watering" />
        )}
        {incompleteTasks.map((singleTask) => (
          <EachTask key={singleTask.id} singleTask={singleTask} />
        ))}
      </section>
      <ButtonStyles type="button" onClick={() => dispatch(tasks.actions.completeAll())}>Complete All</ButtonStyles>
    </IncompleteListStyles>
  )
}