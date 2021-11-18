import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { todos } from "../reducers/todos";
import { DeleteButton } from "./Buttons";

export const CompletedTodos = () => {
  const items = useSelector((store) =>
    store.todos.items.filter((item) => item.isComplete === true)
  );
  const dispatch = useDispatch();
  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id));
  };
  const onDeleteTodo = (id) => {
    dispatch(todos.actions.deleteTodo(id));
  };

  return (
    <>
      <section
        className={items.isComplete <= 0 ? "clear-board" : "todo-wrapper"}
      >
        <h3>Completed</h3>
        {items.map((item) => (
          <div key={item.id} className="small-task-wrapper">
            <div className="check-text">
              <div>
                <input
                  className="checkbox"
                  type="checkbox"
                  checked={item.isComplete}
                  onChange={() => onToggleTodo(item.id)}
                />
              </div>
              <div className="task-wrapper">
                <p className="task-date">{item.timePosted}</p>
                <p className={item.isComplete ? "task-completed" : "task-p"}>
                  {item.text}
                </p>
              </div>
            </div>
            <DeleteButton onClick={() => onDeleteTodo(item.id)}>
              Delete
            </DeleteButton>
          </div>
        ))}
      </section>
    </>
  );
};
