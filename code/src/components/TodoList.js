import React from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import Counter from "./Counter";

import todos from "../reducers/todos";

const TodoList = () => {
  const items = useSelector((store) => store.todos.items);

  const dispatch = useDispatch();

  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id));
  };

  //   //v1
  const onDeleteTodoMutability = (index) => {
    dispatch(todos.actions.deleteTodo(index));
  };
  //v2
  //   const onDeleteTodoImmutability = (id) => {
  //     dispatch(todos.actions.deleteTodo(index));
  //   };
  const date = new Date();
  //   const todaysDate = date.toString().slice(0, 21);
  {
    /* ev kolla upp att använda moment.js här ovan */
  }

  return (
    <section>
      {items.map((item, index) => (
        <div className="flex-item" key={item.id}>
          <p>{item.text}</p>
          <input
            type="checkbox"
            checked={item.isComplete}
            onChange={() => onToggleTodo(item.id)}
          />
          {/* // v1 */}
          <button onClick={() => onDeleteTodoMutability(index)}>Delete</button>
          {/* //v2 */}
          {/* <button onClick={() => onDeleteTodoImmutability(item.id)}> */}
          {/* Delete
          </button> */}
          <p>Posted: {moment(date.createdAt).fromNow()}</p>
          {/* ev kolla upp att använda moment.js här ovan */}
        </div>
      ))}
    </section>
  );
};

export default TodoList;
