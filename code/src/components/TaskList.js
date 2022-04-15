import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { listSlice } from "reducers/listSlice";

const TaskList = () => {
  const tasks = useSelector((store) => store.listSlice.items);
  const dispatch = useDispatch();

  return (
    <>
      {tasks.map((task) => (
        <div key={task.id}>
          <input
            id={task.id}
            type="checkbox"
            checked={task.isDone}
            onChange={() => {
              dispatch(listSlice.actions.toggleStatus(task.id));
            }}
          />
          <label htmlFor={task.id}>{task.description}</label>
        </div>
      ))}
    </>
  );
};

export default TaskList;
