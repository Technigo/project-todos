import React from "react";
import { useSelector } from "react-redux";

import { CheckBox } from "./CheckBox";
import { ClearButton } from "./ClearButton";
import "./taskslist.css";

export const TasksList = () => {
  const allTasks = useSelector((store) => store.tasks);

  return (
    <div className="tasks-container">
      {allTasks.items.map((task) => (
        <div key={task.id} className="task">
          <CheckBox task={task} />
          <div className="task-detail">
            <div className="text"> {task.text} </div>
            <span className="elapsed-time"> Added {task.createdAt} </span>
          </div>
          <ClearButton task={task} />
        </div>
      ))}
    </div>
  );
};
