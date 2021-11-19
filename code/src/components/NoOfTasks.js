import React from "react";
import { useSelector } from "react-redux";

export const NoOfTasks = () => {
 const NoOf = useSelector ((store) => store.tasks.items.length);
  return <p>{NoOf} tasks</p>
};



