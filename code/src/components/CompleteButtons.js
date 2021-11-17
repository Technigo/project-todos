import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import todos from "reducers/todos";

const CompleteButtons = () => {
  const dispatch = useDispatch();

  const onDeleteAll = () => {
    dispatch(todos.actions.removeAll());
  };

  const onCompleteAll = () => {
    dispatch(todos.actions.toggleAllTodo());
  };

  return (
    <div>
      <button onClick={onCompleteAll}>Complete All</button>
      <button onClick={onDeleteAll}>Delete all</button>
    </div>
  );
};

export default CompleteButtons;
