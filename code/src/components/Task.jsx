import React from "react";
import { formatRelative } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { tasks } from "reducers/tasks";

const Task = ({ taskid }) => {
  const dispatch = useDispatch();
  const thisTask = useSelector((store) => store.tasks.task).find(
    (task) => taskid === task.taskid
  );

  const toggleComplete = () => {
    dispatch(
      tasks.actions.toggleTask({
        taskid: thisTask.taskid,
      })
    );
  };

  const created = formatRelative(new Date(thisTask.added), new Date());
  return (
    <>
      <p>{thisTask.title}</p>
      <p>Added {created}</p>
      <input
        type="checkbox"
        checked={thisTask.complete}
        onChange={toggleComplete}
      />
    </>
  );
};

export default Task;
