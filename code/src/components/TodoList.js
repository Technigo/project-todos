import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";

import Checkbox from "@material-ui/core/Checkbox";
// import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import todos from "../reducers/todos";

const TodoList = () => {
  const items = useSelector((store) => store.todos.items);

  const dispatch = useDispatch();

  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id));
  };

  const onDeleteTodo = (index) => {
    dispatch(todos.actions.deleteTodo(index));
  };

  return (
    <section>
      {items.map((item) => (
        <div className="flex-item">
          <div className="todo-wrapper" key={item.id}>
            <span className="label-wrapper">
              <p className="text-wrapper">{item.text}</p>
              <label class="container">
                <input
                  type="checkbox"
                  checked={item.isComplete}
                  onChange={() => onToggleTodo(item.id)}
                />
                <span className="checkmark"></span>
              </label>
            </span>
            <span className="Button-box">
              <button
                className="button-input"
                edge="end"
                aria-label="edit"
                onClick={() => onDeleteTodo(item.id)}
              >
                <FaTrashAlt></FaTrashAlt>
              </button>
            </span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TodoList;
