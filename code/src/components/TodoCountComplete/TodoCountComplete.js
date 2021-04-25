import React from "react";
import { useSelector } from "react-redux";

import "./TodoCounterComplete.css";

const TodoCountComplete = () => {
  const tasks = useSelector((store) => store.todos.tasks);
  const completedTasks = tasks.filter((singelTask) => singelTask.isComplete);

  return (
    <div>
      <p className="complete-text">Completed{completedTasks.length}/{tasks.length}</p>
    </div>
  );
};
export default TodoCountComplete;
