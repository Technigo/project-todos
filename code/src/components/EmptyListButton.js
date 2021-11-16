import React from "react";
import styled from "styled-components/macro";
import { useDispatch } from "react-redux";
import { todo } from "../reducers/todo";

export const EmptyListButton = () => {
  const dispatch = useDispatch();
  return (
    <FlexBox>
      <EmptyListBtn
        onClick={() => {
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
  background-color: #d2d3db;
  padding: 10px;

  &:hover {
    cursor: pointer;
  }
`;
