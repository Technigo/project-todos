/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasksShoulds from 'reducers/tasksShoulds';
import ListHeaderStyling from 'styling/ListHeaderStyling';
import ListStyling from 'styling/ListStyling'
import RemoveTask from './RemoveTask';

const TaskListShouldDos = () => {
  const taskItemShould = useSelector((store) => store.tasksShoulds.items);

  const dispatch = useDispatch();

  const onIsCompleteToggle = (id) => {
    dispatch(tasksShoulds.actions.toggleItem(id));
  }

  const onDeleteTaskItem = (taskIndex) => {
    dispatch(tasksShoulds.actions.removeItem(taskIndex));
  }

  return (
    <section>
      <ListHeaderStyling>
        <div><h2>Should Dos</h2></div>
      </ListHeaderStyling>
      <ListStyling>
        {taskItemShould.map((singleTask, index) => {
          return (
            <article key={singleTask.id}>
              <h2>
                {singleTask.text}
              </h2>
              <label>
            Is it Done?
                <input type="checkbox" checked={singleTask.complete} onChange={() => onIsCompleteToggle(singleTask.id)} />
              </label>
              <RemoveTask onDeleteTaskItem={onDeleteTaskItem} index={index} />
            </article>
          )
        })}
      </ListStyling>

    </section>
  )
}

export default TaskListShouldDos;

