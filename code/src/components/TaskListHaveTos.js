/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import ListHeaderStyling from 'styling/ListHeaderStyling';
import ListStyling from 'styling/ListStyling'

const TaskListHaveTos = () => {
  const taskItem = useSelector((store) => store.tasks.items);

  const dispatch = useDispatch();

  const onIsCompleteToggle = (id) => {
    dispatch(tasks.actions.toggleItem(id));
  }
  /*   const onDeleteTask = (index) => {
    dispatch(tasks.actions.toggleItem(index));
  } */

  return (
    <section>
      <ListHeaderStyling>
        <div><h2>Have To Dos</h2></div>
      </ListHeaderStyling>
      <ListStyling>
        {taskItem.map((singleTask/* , index */) => {
          return (
            <article key={singleTask.id}>
              <h2>
                {singleTask.text}
              </h2>
              <label>
           Done?
                <input type="checkbox" checked={singleTask.complete} onChange={() => onIsCompleteToggle(singleTask.id)} />
              </label>
              {/* <button type="button" onClick={() => onDeleteTask(singleTask.index)}>Remove Item</button> */}
            </article>
          )
        })}
      </ListStyling>

    </section>
  )
}

export default TaskListHaveTos;

