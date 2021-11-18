import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { todo } from "reducers/todo";
import { grayColor } from "../style/colors";

export const FinishAllTasksButton = () => {
  const dispatch = useDispatch();

  return (
    <FlexBox>
      <CompleteAll
        onClick={() => {
          // Dispatch and tell the global state to complete all tasks.
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
  background-color: ${grayColor};
  padding: 10px;

  &:hover {
    cursor: pointer;
    background-color: rgba(210, 211, 219, 0.8);
    transition: all 200ms ease-in-out;
  }
`;
