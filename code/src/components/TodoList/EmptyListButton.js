import React from "react";
import styled from "styled-components/macro";
import { useDispatch } from "react-redux";
import { todo } from "reducers/todo";
import { grayColor } from "../style/colors";

export const EmptyListButton = () => {
  const dispatch = useDispatch();
  return (
    <FlexBox>
      <EmptyListBtn
        onClick={() => {
          // Dispatch and tell the global state to empty the todo list.
          dispatch(todo.actions.emptyList());
        }}
      >
        Empty List
      </EmptyListBtn>
    </FlexBox>
  );
};

const FlexBox = styled.div`
  padding: 0 0 0 20px;
  display: flex;
  border-radius: 2px;
`;

const EmptyListBtn = styled.button`
  border: none;
  background-color: ${grayColor};
  padding: 10px;

  &:hover {
    cursor: pointer;
    background-color: rgba(210, 211, 219, 0.8);
    transition: all 200ms ease-in-out;
  }
`;
