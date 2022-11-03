/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'reducers/tasks'

const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.items);
  const dispatch = useDispatch();

  const onDeleteItemClick = (todoIndex) => {
    dispatch(tasks.actions.deleteItem(todoIndex));
  };

  const onCompleteToggle = (id) => {
    dispatch(tasks.actions.toggleItem(id))
  };

  return (
    <section>
      {taskList.map((singleTask, index) => {
        return (
          <div>
            <label>
              <input
                className="checkbox"
                type="checkbox"
                checked={singleTask.complete}
                onChange={() => onCompleteToggle(singleTask.id)} />
            </label>
            <p>{singleTask.text}</p>
            <button type="button" onClick={() => onDeleteItemClick(index)}>x</button>
          </div>
        )
      })}
    </section>
  )
}

export default TaskList