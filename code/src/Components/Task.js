import React from "react";
import { useDispatch } from "react-redux";

import { todos } from "../Reducers/todos";
import "./TaskStyle.css";

export const Task = ({id, isComplete, description}) => {
    const dispatch = useDispatch();

    return (     
    <label
        className="task-label"
        htmlFor={id}
        style={
          isComplete
            ? { color: "rgb(196, 232, 241)" }
            : { color: "grey" }
        }
      >
        <input
          checked={isComplete}
          id={id}
          type="checkbox"
          onChange={() =>
            dispatch(todos.actions.toggleComplete({ id: id }))
          }
        />
        <span className="task-checkbox"></span>
        {description}
      </label>)
}