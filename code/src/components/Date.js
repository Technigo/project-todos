import React from "react";
// import { useSelector } from "react-redux";
import moment from "moment";
export const Date = () => {
  // const todos = useSelector(state => state.tasks.taskData.length);
  // const now = new Date();
  const now = moment()
    .format("LL")
    .toString();
  return <div>Today: {now}</div>;
};
