import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { todos } from "../../Reducers/todos";
import { MenuButtons } from "../Selects/MenuButtons";

export const SortTasks = () => {
  const [order, setOrder] = useState(true);
  const sortArr = [
    { name: "Deadline", value: "deadline" },
    { name: "Created", value: "createdAt" },
    { name: "Completed", value: "isComplete" },
  ];
  const dispatch = useDispatch();

  const handleClick = (item) => {
    setOrder(!order);
    dispatch(todos.actions.sortTodos({ sortBy: item.value, order: order }));
  };

  return (
    <MenuButtons
      name="Sort"
      array={sortArr}
      handleClick={handleClick}
      order={order}
    />
  );
};
