import React from "react";
import { useSelector, useDispatch } from "react-redux";

import todos from "../reducers/todos";
import AddTodo from "./AddTodo";
import Header from "./Header";
import moment from "moment";

const TodoList = () => {
  const items = useSelector((store) => store.todos.items);

  const dispatch = useDispatch();

  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id));
  };

  const onDeleteTodoImmutability = (id) => {
    dispatch(todos.actions.deleteTodo(id));
  };

  const timestamp = new Date();
  const momentTimestamp = moment(timestamp).format("MMM Do YY");
  console.log(momentTimestamp);

  return (
    <>
      <Header />
      <AddTodo />
      {items.map((item) => (
        <div className="flex-item" key={item.id}>
          <p>{item.text}</p>
          <p>{momentTimestamp}</p>
          <input
            type="checkbox"
            checked={item.isComplete}
            onChange={() => onToggleTodo(item.id)}
          />
          <button onClick={() => onDeleteTodoImmutability(item.id)}>
            Delete
          </button>
        </div>
      ))}
    </>
  );
};

export default TodoList;
