import React from "react";
import { useDispatch } from "react-redux";

import { todos } from "../../Reducers/todos";
import { HamburgerMenu } from "../Selects/HamburgerMenu";

export const FilterTasks = () => {
  const filterArr = [
    { name: "Not completed", value: "isComplete", valueIs: false },
    { name: "Completed", value: "isComplete", valueIs: true },
    { name: "Reset", value: "Reset" },
  ];

  const handleClick = (item) => {
    item.name === "Reset"
      ? dispatch(todos.actions.resetFilter())
      : dispatch(
          todos.actions.filterTodos({
            filterBy: item.value,
            value: item.valueIs,
          })
        );
  };
  const dispatch = useDispatch();
  return (
    <HamburgerMenu array={filterArr} name="Filter" handleClick={handleClick}/>
  );
};
