import React from "react";
import { useSelector } from "react-redux";

const TaskCounter = () => {
  const taskToDo = useSelector((store) => store.tasks.items);
  const remainingToDo = taskToDo.filter((toDo) => toDo.isComplete === false);

  if (taskToDo.length > 0) {
    return (
      <div>
        <p>Tasks To Do:{remainingToDo.length} </p>
      </div>
    );
  } else if (remainingToDo.length === 0) {
      return(
          <p>No tasks toDo</p>
      )
  }
};
export default TaskCounter;
