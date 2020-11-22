import React from "react";
import { useSelector } from "react-redux";
import List from "@material-ui/core/List";

import { TodoItem } from "components/TodoItem";

export const TodoList = () => {
  const allTasks = useSelector((store) => store.tasks);

  console.log(allTasks);

  return (
    <List>
      {allTasks.todos.map((task, index) => (
        <TodoItem key={task.id} task={task.task} index={index}></TodoItem>
      ))}
    </List>
  );
};
