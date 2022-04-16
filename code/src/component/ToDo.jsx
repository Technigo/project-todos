import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toggleComplete } from "../features/todo/todoSlice";

const ToDo = ({ todoItem }) => {
  const { todo, isCompleted, id, date } = todoItem;
  const dispatch = useDispatch();

  return (
    <li className="container-center-start todo-item">
      <button
        className={`btn-check container-center ${
          isCompleted && "btn-completed"
        }`}
        onClick={() => dispatch(toggleComplete(id))}
      >
        {isCompleted && <AiOutlineCheck className="check-icon" />}
      </button>
      <div className="container-space-between" style={{ width: "100%" }}>
        <p className="my-1">{todo}</p>
        <p className="my-1" style={{ fontSize: "0.8rem" }}>
          {date}
        </p>
      </div>
    </li>
  );
};

export default ToDo;
