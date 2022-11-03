/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasksWonts from 'reducers/tasksWonts';
import ListHeaderStyling from 'styling/ListHeaderStyling';
import ListStyling from 'styling/ListStyling'

const TaskListWontDos = () => {
  const taskItemWonts = useSelector((store) => store.tasksWonts.items);

  const dispatch = useDispatch();

  const onIsCompleteToggle = (id) => {
    dispatch(tasksWonts.actions.toggleItem(id));
  }

  const onIsShowInputField = () => {
    return (
      <input type="text" />
    )
  }

  return (
    <section>
      <ListHeaderStyling>
        <div><h2>Won&lsquo;t Dos</h2></div>
      </ListHeaderStyling>
      <ListStyling>
        {taskItemWonts.map((singleTask) => {
          return (
            <article key={singleTask.id}>
              <h2>
                {singleTask.text}
              </h2>
              <label>
            Done?
                <input type="checkbox" checked={singleTask.complete} onChange={() => onIsCompleteToggle(singleTask.id)} />
              </label>
            </article>
          )
        })}
        <button
          type="button"
          onClick={() => onIsShowInputField()}>Add new To do
        </button>
      </ListStyling>

    </section>
  )
}

export default TaskListWontDos;

