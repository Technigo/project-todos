import React from "react";
import { FaCheck } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleComplete } from "../features/todo/todoSlice";

const ToDo = ({ todoItem }) => {
  const { todo, isCompleted, id } = todoItem;
  const dispatch = useDispatch();

  return (
    <li className="container-center-start todo-item">
      <button
        className={`btn-check container-center ${
          isCompleted && "btn-completed"
        }`}
        onClick={() => dispatch(toggleComplete(id))}
      >
        {isCompleted && <FaCheck className="check-icon" />}
      </button>
      <p className="my-1">{todo}</p>
    </li>
  );
};

export default ToDo;
