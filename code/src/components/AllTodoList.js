import React from "react";
import { useSelector, useDispatch } from "react-redux";
import bin from "../assets/recycle-bin.svg";
import { DeleteBtn } from "./styled/DeleteBtn";
import dayjs from "dayjs";

import todos, { selectFilteredTodos } from "../reducers/todos";

export const AllTodoList = () => {
  const items = useSelector((state) => selectFilteredTodos(state));

  const dispatch = useDispatch();

  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id));
  };

  const onDeleteTodo = (id) => {
    dispatch(todos.actions.deleteTodo(id));
  };

  return (
    <section className="todo-wrapper">
      {items.map((item, index) => (
        <div>
          <div className="flex-item" key={item.id}>
            <label className="switch">
              <input className="tick" type="checkbox" checked={item.isComplete} onChange={() => onToggleTodo(item.id)} />
              <span class="custom-checkbox" aria-label="decoration"></span>
            </label>
            <p className={item.isComplete ? "completed" : "uncompleted"}>{item.text}</p>
            <DeleteBtn width={20} height={20} onClick={() => onDeleteTodo(item.id)}>
              <img className="bin" aria-label="icon" alt="icon" src={bin}></img>
            </DeleteBtn>
          </div>
          <p>{dayjs(item.creationDate).format("DD MMM")}</p>
        </div>
      ))}
    </section>
  );
};
