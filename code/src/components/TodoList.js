import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { todos } from "../reducer/todos";
import "../css/todoList.css";

export const TodoList = () => {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.todos.items);

  // Create the onRemoveClicked handler
  const onRemoveClick = (id) => {
    dispatch(todos.actions.removeItem(id));
  };

  // Create the onChange handler for handling the complete status
  const handleOnChange = (id) => {
    // dispatch(
    //   todos.actions.setToComplete({
    //     itemId: item.id,
    //     isComplete: !item.isComplete,
    //   })
    // );

    dispatch(todos.actions.toggleComplete(id))
  };

  return (
    <section className="todo-list">
      {items.map((item) => (
        <article key={item.id} className="todo-item">
          <div className="container">
            <label className="complete-checkbox">
              <input
                type="checkbox"
                defaultChecked={item.isComplete}
                onChange={() => handleOnChange(item.id)}
              />
              <span className="checkmark"></span>
            </label>

            <p className={item.isComplete ? "text-when-checked" : null}>
              {item.name}
            </p>
          </div>

          <input
            type="image"
            src="./img/remove.png"
            className="remove-icon"
            alt="remove button"
            onClick={() => onRemoveClick(item.id)}
          />
        </article>
      ))}
    </section>
  );
};
