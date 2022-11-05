import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from '../reducers/task';

const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.items);
  const dispatch = useDispatch();

  // Action
  const onIsCaughtToggle = (id) => {
    dispatch(tasks.actions.toggleItem(id));
  };

  const onDeleteTaskBtn = (taskIndex) => {
    dispatch(tasks.actions.deleteItem(taskIndex));
  };

  return (
    <section className="wrapper">
      {/* inside prantes is our payload */}
      {taskList.map((singleTask) => {
        return (
          <article className="container">
            <h2>{singleTask.name}</h2>
            <label className="inputLabel">
              <input
                className="input"
                type="checkbox"
                checked={singleTask.isCaught}
                onChange={() => onIsCaughtToggle(singleTask.id)}
              />
            </label>
            <button
              className="deleteTaskBtn"
              onClick={() => onDeleteTaskBtn(singleTask)}
            >
              X
            </button>
          </article>
        );
      })}
    </section>
  );
};

export default TaskList;
