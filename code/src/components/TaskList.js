/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import todos from 'reducers/todos'

const TaskList = () => {
  const taskList = useSelector((store) => store.todos.items)

  const dispatch = useDispatch();

  const onIsDoneToggle = (id) => {
    dispatch(todos.actions.toggleItem(id));
  }

  return (
    <section>
      {taskList.map((singleTask) => {
        return (
          <article>
            <label>
              <input
                type="checkbox"
                checked={singleTask.isDone}
                onChange={() => onIsDoneToggle(singleTask.id)} />
            </label>
            <h2>{singleTask.text}</h2>
            <button type="button">Delete</button>
          </article>
        );
      })}
    </section>
  )
}

export default TaskList;