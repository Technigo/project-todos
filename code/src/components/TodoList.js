import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { todos } from "../reducers/todos";

export const TodoList = () => {
  const items = useSelector((store) => store.todos.items);
  const dispatch = useDispatch();
  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id));
  };
  const onDeleteTodo = (id) => {
    dispatch(todos.actions.deleteTodo(id));
  };
  //   const onCompleteAllTodo = () => {
  //     dispatch(todos.actions.completeAll);
  //   };

  return (
    <section>
      <p className={items.length <= 0 ? "clear-board" : "p"}>Hello</p>

      {items.map((item) => (
        <div key={item.id} className="task-wrapper">
          <input
            type="checkbox"
            checked={item.isComplete}
            onChange={() => onToggleTodo(item.id)}
          />
          <p>{item.timePosted}</p>
          <p className={item.isComplete ? "task-completed" : "p"}>
            {item.text}
          </p>
          <button onClick={() => onDeleteTodo(item.id)}>-</button>
        </div>
      ))}
      {/* <button onClick={() => onCompleteAllTodo()}>check all</button> */}
    </section>
  );
};
