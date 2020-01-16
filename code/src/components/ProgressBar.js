import React from "react";
import { useSelector } from "react-redux";

export const ProgressBar = () => {
  const tasks = useSelector(state => state.tasks.items);
  const total = tasks.length;

  if (total > 0) {
    const completed = tasks.filter(tasks => tasks.isDone).length;

    return (
      <div className="ProgressBar">
        {completed} of {total} tasks are completed
      </div>
    );
  }

  return null;
};
