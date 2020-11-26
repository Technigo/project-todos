import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { todos } from "reducers/todos";

export const ClearAllButton = () => {
  const items = useSelector(store => store.todos.items);
  const dispatch = useDispatch();

  return (
    <ClearButton
      type="reset"
      onClick={() => dispatch(todos.actions.removeAll())}
    >
      Clear All
    </ClearButton>
  );
};

const ClearButton = styled.button`
  align-self: center;
  height: 30px;
  width: 300px;
  margin: 10px;
  font-size: 20px;
  background: ${props => props.background || "black"};
  color: #fff;
  border: none;
  border-radius: 5px;
  &:hover {
    background: #474747;
  }
`;
