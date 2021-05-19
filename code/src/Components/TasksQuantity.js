import React from "react";
import { useSelector } from "react-redux";

export const TasksQuantity = () => {
  const allTasks = useSelector((state) => state.tasks.items);
  let completedTasks = allTasks.filter((item) => item.complete === true);

  return (
    //tasks quantity will be display: none, when the list is empty
    <>
      {allTasks.length !== 0 && (
        <span className="tasks-quantity">
          {completedTasks.length}/{allTasks.length} Done
        </span>
      )}
    </>
  );
};
