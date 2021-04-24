import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { todos } from "../../Reducers/todos";
import { HamburgerMenu } from "../Selects/HamburgerMenu";

export const FilterTasks = () => {
  const filters = useSelector(store => store.todos.filters)
  const filterArr = [
    { name: "Not completed", value: "isComplete", valueIs: false },
    { name: "Completed", value: "isComplete", valueIs: true },
    { name: "Reset", value: "Reset" },
  ];
  const dispatch = useDispatch();

  const handleClick = (item) => {

        dispatch(todos.actions.filterBy({type: "byFilter", value: item.value}))
        return  item.name === "Reset"
        ? dispatch(todos.actions.resetFilter())
        : dispatch(
            todos.actions.filterTodos({
              filterBy: item.value,
              value: item.valueIs,
            })
          )
  };
 
  return (
    <HamburgerMenu array={filterArr} name="Filter" handleClick={handleClick}/>
  );
};
