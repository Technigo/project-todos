import React from "react";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import todos from "../reducers/todos";
import "./todoList.css";

export const TodoList = () => {
  const items = useSelector((store) => store.todos.items);

  const dispatch = useDispatch();

  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id));
  };

  const onDeleteTodo = (id) => {
    dispatch(todos.actions.deleteTodo(id));
  };

  return (
    <section className="new-todo">
      {items.map((item) => (
        <div className="flex-item" key={item.id}>
          <div className="item-container">
            <p>{item.text}</p>
          </div>
          <div className="date-container">
            <p className="create-date">{moment().toString().slice(0, 10)}</p>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              checked={item.isComplete}
              onChange={() => onToggleTodo(item.id)}
            />
          </div>
          <div className="delete-container">
            <button
              className="delete-btn"
              onClick={() => onDeleteTodo(item.id)}
            >
              -
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TodoList;
