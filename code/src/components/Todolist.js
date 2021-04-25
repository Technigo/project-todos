import React from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";

import todos from "../reducers/todos";

const TodoList = () => {
  const items = useSelector((store) => store.todos.items);
  const completedItems = items.filter((singleTodo) => singleTodo.isComplete);

  const dispatch = useDispatch();

  return (
    <div>
      <div className="amount">
        <p>
          Completed items: {completedItems.length} / {items.length}
        </p>
        <div className="button-container">
          <button
            className="button"
            onClick={() => dispatch(todos.actions.completeAllTodos())}
          >
            Mark all complete
          </button>
          <button
            className="button"
            onClick={() => dispatch(todos.actions.cleanAllTodos())}
          >
            Unmark all
          </button>
        </div>
      </div>
      {items.map((todo, index) => (
        <div key={todo.id} className="container">
          <input
            className="description"
            type="checkbox"
            checked={todo.isComplete}
            onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
          />
          <label htmlFor="description">
            <p>{todo.description}</p>
          </label>
          <span className="date"> ✯ - {moment(todo.createdAt).fromNow()}</span>
          <button
            className="button"
            onClick={() => dispatch(todos.actions.removeTodo(index))}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
