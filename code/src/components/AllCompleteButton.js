import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { todos } from "../reducers/todos";

export const AllCompleteButton = () => {
  const dispatch = useDispatch();

  const [isAllComplete, setIsAllComplete] = useState(false);

  const handleAllComplete = () => {
    dispatch(todos.actions.setAllComplete());
    setIsAllComplete(true);
  };

  const handleAllIncomplete = () => {
    dispatch(todos.actions.setAllIncomplete());
    setIsAllComplete(false);
  };

  return (
    <MarkAllButton
      type="button"
      onClick={
        !isAllComplete ? () => handleAllComplete() : () => handleAllIncomplete()
      }
    >
      {!isAllComplete ? "Mark All Complete" : "Mark All Incomplete"}
    </MarkAllButton>
  );
};

const MarkAllButton = styled.button`
  align-self: center;
  margin: 5px;
  height: 30px;
  width: 95%;
  font-size: 20px;
  background: ${props => props.background || "#0099ff"};
  color: #fff;
  border: none;
  border-radius: 5px;
  &:hover {
    background: #4dbfed;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    width: 50%;
    height: 40px;
  }

  @media (min-width: 1024px) {
    width: 150px;
    height: 50px;
  }
`;
