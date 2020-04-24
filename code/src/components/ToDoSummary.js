import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { todos } from "../reducers/todos.js";
import styled from "styled-components";

export const TodoSummary = () => {
  const dispatch = useDispatch();
  // Get list information for this list
  const list = useSelector((store) => store.todos.list);

  // Count the number of items that are done
  const numDone = list.items.filter((item) => item.done).length;

  // Remove all
  const onRemoveClickedAll = (e) => {
    dispatch(todos.actions.removeAllTodos());
  };

  return (
    <Summary>
      <Counter>
        {numDone}/{list.items.length} tasks done
      </Counter>
      <RemoveAll onClick={onRemoveClickedAll}>CLEAR ALL</RemoveAll>
    </Summary>
  );
};

const Summary = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
`;

const Counter = styled.h2`
  font-family: "Helvetica";
  font-size: 24px;
  font-weight: lighter;
  text-align: left;

  color: #fff;
`;

const RemoveAll = styled.button`
  height: 30px;

  padding: 5px 15px;

  font-family: "Helvetica";
  font-size: 16px;
  font-weight: lighter;

  color: #fff;
  background: #e92272;

  border: none;
  border-radius: 4px;

  align-self: baseline;
  &:active {
    background: #fbd2e4;
  }

  box-sizing: border-box;

  cursor: pointer;
`;
