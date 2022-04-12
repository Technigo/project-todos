import React from "react";
import { useSelector, useDispatch } from "react-redux";

import tasks from "reducers/tasks";

const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.lists);

  const dispatch = useDispatch();

  const onTaskToggle = (taskId) => {
    dispatch(tasks.actions.toggleTask(taskId))
  };

  return (
    <section>
      {taskList.map((task) => (
        <article key={task.id}>
          <h2>{task.text}</h2>
          <input 
            type="checkbox"
            checked={task.complete}
            onChange={() => {onTaskToggle(task.id)}}
          />
        </article>
      ))}
    </section>
  )
}

export default TaskList