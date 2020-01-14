import React from "react";
import { useSelector } from "react-redux";
import { Input } from "components/Input";
import { Toggle } from "./Toggle";
import { DeleteOne } from "./DeleteOne";
import { Important } from "./Important";
// import { tasks } from "reducers/tasks";

export const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  console.log(tasks);
  // console.log(tasks.taskData.map(i => i.important));

  return (
    <div>
      <Input />
      {tasks.taskData.map(task => {
        return (
          <div className="task" key={task.id}>
            <Toggle ifCompleted={task.complete} id={task.id} />
            <p key={task.id}>{task.text}</p>
            <Important ifImportant={task.important} id={task.id} />
            <DeleteOne id={task.id} />
          </div>
        );
      })}
    </div>
  );
};
