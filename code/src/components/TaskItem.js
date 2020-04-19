import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tasks } from '../reducers/tasks'

export const TaskItem = ({ itemIndex }) => {
  const item = useSelector((store) => store.tasks.list.items[itemIndex]);

  const dispatch = useDispatch();

  const onRemoveClicked = (e) => {
    dispatch(
      tasks.actions.removeTask({
        itemIndex,
      })
    )
  };

  const handleOnChange = (e) => {
    dispatch(
      tasks.actions.setDone({
        itemIndex: itemIndex,
        complete: !item.complete,
      })
    )
  };

  return (
    <div className={`task-item ${item.complete ? "complete" : ""}`}>
      <input
        type="checkbox"
        onChange={handleOnChange}
        className='task-item-check'
        checked={item.complete ? "checked" : ""}
      ></input>
      <span className="task-item-text">{item.text}</span>
      <a className="task-item-remove" onClick={onRemoveClicked}>
        [Remove]
      </a>
    </div>
  );
};  