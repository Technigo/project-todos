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
    <section>
      {taskList.map((taskItem, taskIndex) => (
        <article key={taskItem.id}>
          <p>{taskItem.text}</p>
          <label>
            Completed:
            <input
              type="checkbox"
              checked={taskItem.isCaught}
              onChange={() => onTaskToggle(taskItem.id)}
            />
          </label>
          <button onClick={() => onTaskDelete(taskItem.taskIndex)}>
            <span role="img" aria-label="delete">
              ❌
            </span>
          </button>
        </article>
      ))}
    </section>
  );
};

export default Tasklist;
