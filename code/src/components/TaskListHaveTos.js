/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import ListHeaderStyling from 'styling/ListHeaderStyling';
import ListStyling from 'styling/ListStyling'
import AddNewTask from './AddNewTask.js';
import RemoveTask from './RemoveTask.js';

const TaskListHaveTos = () => {
  const taskItem = useSelector((store) => store.tasks.items);

  const dispatch = useDispatch();

  const onIsCompleteToggle = (id) => {
    dispatch(tasks.actions.toggleItem(id));
  }
  const onDeleteTaskItem = (taskIndex) => {
    dispatch(tasks.actions.removeItem(taskIndex));
  }

  return (
    <section>
      <ListHeaderStyling>
        <div><h2>Have To Dos</h2></div>
      </ListHeaderStyling>
      <ListStyling>
        {taskItem.map((singleTask, index) => {
          return (
            <article key={singleTask.id}>
              <h2>
                {singleTask.text}
              </h2>
              <label>
           Done?
                <input type="checkbox" checked={singleTask.complete} onChange={() => onIsCompleteToggle(singleTask.id)} />
                <RemoveTask onDeleteTaskItem={onDeleteTaskItem} index={index} />
              </label>
            </article>
          )
        })}
        <AddNewTask />
      </ListStyling>

    </section>
  )
}

export default TaskListHaveTos;

