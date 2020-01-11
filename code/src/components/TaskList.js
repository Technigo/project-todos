import React from "react";
import { useSelector } from "react-redux";
// import { tasks } from "reducers/tasks";

export const TaskList = () => {
  const tasks = useSelector(state => state.tasks);

  return (
    <div>
      {tasks.map(task => {
        return <p key={task.id}>{task.text}</p>;
      })}
    </div>
  );
};
