import React from "react";
import { useSelector, useDispatch } from "react-redux";

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
            <p>{item.text}</p>
            <label class="container">
              <input
                type="checkbox"
                checked={item.isComplete}
                onChange={() => onToggleTodo(item.id)}
              />
              <span class="checkmark"></span>
            </label>
            {/* <input
              type="checkbox"
              checked={item.isComplete}
              onChange={() => onToggleTodo(item.id)}
            />{" "} */}
            <button
              className="btn btn-delete"
              edge="end"
              aria-label="edit"
              onClick={() => onDeleteTodo(item.id)}
            >
              <span className="mdi mdi-delete mdi-24px"></span>
              <span class Name="mdi mdi-delete-empty mdi-24px"></span>
              <span>Delete</span>
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TodoList;
