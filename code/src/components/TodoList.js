import React from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import todos from "../reducers/todos";

const TodoList = () => {
  const items = useSelector((store) => store.todos.items); //Reaching for the todos via selector

  const dispatch = useDispatch(); //This hook returns a reference to the dispatch function from the Redux store. It's used to dispatch actions as needed.

  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id));
  };

  const onDeleteTodo = (id) => {
    dispatch(todos.actions.deleteTodo(id));
  };

  return (
    <>
      {items.map((item) => (
        <div className="task-list">
        <div className="task-container" key={item.id}>
          <div className="task-with-checkbox">
            <input
              className="checkbox"
              type="checkbox"
              checked={item.isComplete}
              onChange={() => onToggleTodo(item.id)}
            />
            <div className="text-and-date-box">
              <p className="task-paragraph">{item.text}</p>
              <p className="date-paragraph">Added {moment().format("MMM Do hh:mm")}</p>
            </div>
          </div>
          <button className="delete-btn" onClick={() => onDeleteTodo(item.id)}>
          <i className="fas fa-minus-circle"></i>
          </button>
        </div>
        </div>
      ))}
    </>
  );
};

export default TodoList;
