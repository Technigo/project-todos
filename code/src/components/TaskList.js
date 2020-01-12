import React from "react";
import { useSelector } from "react-redux";
import { Input } from "components/Input";
// import { tasks } from "reducers/tasks";

export const TaskList = () => {
  const tasks = useSelector(state => state.tasks);

  return (
    <div>
      <Input />
      {tasks.taskData.map(task => {
        return <p key={task.id}>{task.text}</p>;
      })}
    </div>
  );
};
