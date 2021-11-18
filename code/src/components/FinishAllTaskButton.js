import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { todo } from "../reducers/todo";

export const FinishAllTasksButton = () => {
  const dispatch = useDispatch();

  return (
    <FlexBox>
      <CompleteAll
        onClick={() => {
          console.log("hej");
          dispatch(todo.actions.setAllIsCompleted());
        }}
      >
        Complete All
      </CompleteAll>
    </FlexBox>
  );
};

const FlexBox = styled.div`
  padding: 0 0 0 20px;
  display: flex;
  border-radius: 2px;
`;

const CompleteAll = styled.button`
  border: none;
  background-color: #d2d3db;
  padding: 10px;

  &:hover {
    cursor: pointer;
  }
`;
