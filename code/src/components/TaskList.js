import React from "react";
import { useSelector } from "react-redux";
import { TaskItem } from "components/TaskItem";

export const TaskList = () => {
  const items = useSelector(state => state.tasks.items);

  return (
    <ul>
      {items.map(item => (
        <TaskItem key={item.id} item={item} />
      ))}
    </ul>
  );
};
