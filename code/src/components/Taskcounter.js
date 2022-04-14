import React from "react";
import { useSelector } from "react-redux";

const Taskcounter = () => {
  const taskToDo = useSelector((store) => store.tasks.taskitems);
  const taskcompleted = taskToDo.filter((task) => task.complete === true);
  const taskLeft = taskToDo.filter((task) => task.complete === false);
  return (
    <div className="taskcounter">
      <p>
        {" "}
        <b>Task completed: </b>
        {taskcompleted.length}
      </p>
      <p>
        {" "}
        <b>Task to be done:</b> {taskLeft.length}
      </p>
    </div>
  );
};

export default Taskcounter;
