import React from "react";
import { useSelector, useDispatch } from "react-redux";

import todo from "../reducers/todo";

import moment from "moment";
import styled from "styled-components";

// Styled component that wraps the content
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 25px 20px;
  justify-content: space-between;
  background-color: #f2f2f2;
  box-shadow: 0 5px 2px -2px #e9eef1;
`;

const Header = () => {
  const store = useSelector((store) => store.todo);
  const dispatch = useDispatch();

  // This function first will confirm that user really wants to clear all the tasks and if yes will call a reducer action
  const onClearClick = () => {
    let answer = window.confirm("Are you sure you want to clear all tasks?");
    if (answer) {
      dispatch(todo.actions.clearAll());
    }
  };

  const onCompleteAll = () => {
    dispatch(todo.actions.compleatAll());
  };

  return (
    <Wrapper>
      <div className="header-left">
        <h1>
          Hey, <br /> This is your to-do list.
        </h1>
        <p>{moment().format("MMMM Do")}</p>
      </div>
      <div className="header-right">
        <div className="todo-statistic">
          <p className="task-count">{store.items.length} tasks</p>
          <p className="completed-count">
            {store.items.filter((todo) => todo.completed === true).length}{" "}
            completed{" "}
          </p>
        </div>
        <div className="header-btn-wrapper">
          <button className="btn-header" onClick={onCompleteAll}>
            Mark all as complete
          </button>
          <button className="btn-header" onClick={onClearClick}>
            Clear all
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
