import React from "react";
import { useSelector, useDispatch } from "react-redux";

import todo from "../reducers/todo";

import moment from "moment";
import styled from "styled-components";

// Styled component that wraps the content
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: lightgrey;
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

  return (
    <Wrapper>
      <p>Here are your todo's</p>
      <p>
        we have {store.items.length} todos out of those{" "}
        {store.items.filter((todo) => todo.completed === true).length} are
        completed
      </p>
      <p>{moment().format("MMMM Do")}</p>
      <button onClick={onClearClick}>Clear all</button>
    </Wrapper>
  );
};

export default Header;
