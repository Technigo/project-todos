import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { todos } from "../reducers/todos";
import { CheckAllButton, DeleteButton } from "./Buttons";

export const TodoList = () => {
  const items = useSelector((store) => store.todos.items);
  const dispatch = useDispatch();
  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id));
  };
  const onDeleteTodo = (id) => {
    dispatch(todos.actions.deleteTodo(id));
  };

  const onClickClearAll = () => {
    dispatch(todos.actions.clearAllTasks());
  };

  return (
    <>
      <section className={items.length <= 0 ? "clear-board" : "todo-wrapper"}>
        {items.length <= 0 && <p>Add a task</p>}
        {items.map((item) => (
          <div key={item.id} className="small-task-wrapper">
            <input
              className="checkbox"
              type="checkbox"
              checked={item.isComplete}
              onChange={() => onToggleTodo(item.id)}
            />
            <div className="task-wrapper">
              <p className="task-date">{item.timePosted}</p>
              <p className={item.isComplete ? "task-completed" : "task-p"}>
                {item.text}
              </p>
            </div>
            <DeleteButton onClick={() => onDeleteTodo(item.id)}>
              Delete
            </DeleteButton>
          </div>
        ))}
      </section>
      {items.length >= 1 && (
        <CheckAllButton onClick={onClickClearAll}>Complete all</CheckAllButton>
      )}
    </>
  );
};
