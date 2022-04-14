import React from "react";
import { useSelector, useDispatch } from "react-redux";

import tasks from "../reducers/tasks";

const Tasklist = () => {
  const taskList = useSelector((store) => store.tasks.taskitems);
  console.log(taskList);

  const dispatch = useDispatch();
  const onTaskToggle = (TaskId) => {
    dispatch(tasks.actions.toggleitem(TaskId));
  };
  const onTaskDelete = (index) => {
    dispatch(tasks.actions.deleteitem(index));
  };

  return (
    <section className="task-list">
      {taskList.map((taskItem, taskIndex) => (
        <article className="text-image" key={taskItem.id}>
          <button
            className="button-task"
            onClick={() => onTaskDelete(taskItem.taskIndex)}
          >
            <span role="img" aria-label="delete">
              <img src="./Assets/del.png" alt="delete image" />
            </span>
          </button>
          <div className="input-task">
            <label>
              <input
                name="task-check"
                type="checkbox"
                checked={taskItem.complete}
                onChange={() => onTaskToggle(taskItem.id)}
              />
            </label>
          </div>
          <h4>{taskItem.text}</h4>
        </article>
      ))}
    </section>
  );
};

export default Tasklist;
