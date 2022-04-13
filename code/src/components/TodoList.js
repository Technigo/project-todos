import React from "react";
import { useSelector, useDispatch } from "react-redux";

import tasks from "../reducers/tasks";

const TodoList = () => {
  const items = useSelector((store) => store.tasks.items);

  const dispatch = useDispatch();

  const onToggleTask = (id) => {
    dispatch(tasks.actions.toggleTask(id));
  };

  const onDeleteTasks = (id) => {
    dispatch(tasks.actions.deleteTasks(id));
  };

  return (
    <section>
      {items.map((item) => (
        <div key={item.id}>
          <p>{item.text}</p>
          <input
            type="checkbox"
            checked={item.isComplete}
            onChange={() => onToggleTask(item.id)}
          />
          <button onClick={() => onDeleteTasks(item.id)}>Delete</button>
        </div>
      ))}
    </section>
  );
};

export default TodoList;
