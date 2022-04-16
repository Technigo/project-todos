import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import tasks from "reducers/tasks";

const ClearBtn = () => {
  const dispatch = useDispatch();

  const onClickClearAll = () => {
    dispatch(tasks.actions.clearAll());
  };

  return (
    <div>
      <ClearButton onClick={onClickClearAll}>Clear All</ClearButton>
    </div>
  );
};

export default ClearBtn;

const ClearButton = styled.button`
  font-family: "rubik";
  margin: 5%;
  background-color: #064338;
  color: #cee9ed;
  padding: 10px;
  border: black solid 3px;
  cursor: pointer;
  text-decoration: none;
`;
