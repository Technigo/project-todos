import React from "react";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../features/todo/todoSlice";

const Header = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todo.todo.length);
  return (
    <header className="container-center-space-between p-3 header">
      <article className="container-column">
        <h3 className="my-1">Todo</h3>
        <p className="my-1">{moment().format("MMM Do")}</p>
      </article>
      <article className="container-column">
        <p className="my-1">{tasks} tasks</p>
        <button className="btn-primary" onClick={() => dispatch(reset())}>
          CLEAR ALL
        </button>
      </article>
    </header>
  );
};

export default Header;
