import React from "react";
import { useDispatch } from "react-redux";

import { todos } from "../../Reducers/todos";
import { MenuButtons } from "../Selects/MenuButtons";

export const FilterTasks = () => {
  const filterArr = [
    { name: "Not done", value: "isComplete", valueIs: false },
    { name: "Done", value: "isComplete", valueIs: true },
    { name: "Has deadline", value: "isTimed", valueIs: true },
    { name: "No deadline", value: "isTimed", valueIs: false },
    { name: "Over due", value: "overdue", valueIs: true },
    { name: "Reset", value: "Reset" },
  ];
  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(todos.actions.filterBy({ type: "byFilter", value: item.value }));
    return item.name === "Reset"
      ? dispatch(todos.actions.resetFilter())
      : dispatch(
          todos.actions.filterTodos({
            filterBy: item.value,
            value: item.valueIs,
          })
        );
  };

  return (
    <MenuButtons array={filterArr} name="Filter" handleClick={handleClick} />
  );
};
