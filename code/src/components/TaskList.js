import React from "react";
import { useSelector } from "react-redux";

const TaskList = () => {
  const tasks = useSelector((store) => store.listSlice.items);
  return (
    <>
      {tasks.map((task) => (
        <div key={task.id}>
          <input id={task.id} type="checkbox" />
          <label htmlFor={task.id}>{task.description}</label>
        </div>
      ))}
    </>
  );
};

export default TaskList;
