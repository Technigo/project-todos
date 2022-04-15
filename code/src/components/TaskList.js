import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { listSlice } from "reducers/listSlice";
import moment from "moment";

const TaskList = () => {
  const tasks = useSelector((store) => store.listSlice.items);
  const completedTasks = useSelector((store) =>
    store.listSlice.items.filter((item) => item.isDone)
  );
  const dispatch = useDispatch();

  return (
    <>
      {tasks.map((task) => (
        <div key={task.id}>
          <input
            id={task.id}
            type="checkbox"
            checked={task.isDone}
            onChange={() => dispatch(listSlice.actions.toggleStatus(task.id))}
          />
          <label htmlFor={task.id}>{task.description}</label>
          <p>Created {moment(task.createdAt).format("dddd, MMM Do YYYY @ hh:mm a")}</p>
          <button
            type="button"
            onClick={() => {
              dispatch(listSlice.actions.removeTask(task.id));
            }}
          >
            -
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => {
          dispatch(listSlice.actions.resetList());
        }}
      >
        Clear list
      </button>
      <p>
        {completedTasks.length}/{tasks.length} tasks completed
      </p>
    </>
  );
};

export default TaskList;
