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
    <main>
      {items.map((item) => (
        <div className="added-task-container" key={item.id}>
          <div className="added-task-with-checkbox">
            <input
              className="checkbox"
              type="checkbox"
              checked={item.isComplete}
              onChange={() => onToggleTodo(item.id)}
            />
            <div className="text-and-date-box">
              <p className="added-task-p">{item.text}</p>
              <p>Added {moment().format("MMM Do")}</p>
            </div>
          </div>
          <button className="delete-btn" onClick={() => onDeleteTodo(item.id)}>
          <i class="fas fa-minus-circle"></i>
          </button>
        </div>
      ))}
    </main>
  );
};

export default TodoList;
