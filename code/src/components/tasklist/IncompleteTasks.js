import { ButtonStyles } from 'components/buttons/Buttons.styles';
import { EachTask } from 'components/eachTask/EachTask';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';

export const IncompleteTasks = () => {
  const taskList = useSelector((store) => store.tasks.items)
  const incompleteTasks = taskList.filter((item) => item.complete === false)
  const dispatch = useDispatch();
  return (
    <section>
      <h3>Inomplete Tasks</h3>
      <ul>
        {incompleteTasks.map((singleTask) => (
          <EachTask key={singleTask.id} singleTask={singleTask} />
        ))}
      </ul>
      <ButtonStyles type="button" onClick={() => dispatch(tasks.actions.completeAll())}>Complete All</ButtonStyles>
    </section>
  )
}