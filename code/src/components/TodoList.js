import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { formatRelative, subDays } from "date-fns";

import tasks from "../reducers/tasks";

import TaskCounter from "./TaskCounter";
import NoTodos from "./NoTodos";

const TodoList = () => {
  const items = useSelector((store) => store.tasks.items);

  const dispatch = useDispatch();

  const onToggleTask = (id) => {
    dispatch(tasks.actions.toggleTask(id));
  };

  const onDeleteTasks = (id) => {
    dispatch(tasks.actions.deleteTasks(id));
  };

  const clearAll = () => {
    dispatch(tasks.actions.clearAll());
  };

  const checkAllTasks = () => {
    dispatch(tasks.actions.checkAllTasks());
  };

  const taskDate = formatRelative(subDays(new Date(), 0), new Date(), {
    addSuffix: true,
  });

  return (
    <section>
      <TaskCounter />
      <button onClick={clearAll} disabled={items < 1}>
        Clear All
      </button>
      <button onClick={checkAllTasks} disabled={items < 1}>
        Check All
      </button>
      {items.map((item) => (
        <div key={item.id}>
          <input
            type="checkbox"
            checked={item.isComplete}
            onChange={() => onToggleTask(item.id)}
          />
          <p>{taskDate}</p>
          <p className={item.isComplete ? "complete-todo" : "uncomplete-todo"}>
            {item.text}
          </p>
          <button onClick={() => onDeleteTasks(item.id)}>x </button>
        </div>
      ))}
    </section>
  );
};

export default TodoList;
