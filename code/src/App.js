import React from "react";
import TaskList from "components/TaskList";
import AddTask from "components/AddTask";

export const App = () => {
  return (
    <div>
      <h1>GET SH*T DONE</h1>
      <AddTask />
      <TaskList />
    </div>
  );
};
