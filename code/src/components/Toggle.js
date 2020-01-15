import React from "react";
import { useDispatch } from "react-redux";
import { tasks } from "reducers/tasks";

import styled from "styled-components";

export const Toggle = ({ ifCompleted, id }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(tasks.actions.toggle({ id }));
  };
  return (
    <Button type="button" onClick={handleClick}>
      {ifCompleted === true && <ion-icon name="checkmark-circle"></ion-icon>}
      {ifCompleted === false && <ion-icon name="radio-button-off"></ion-icon>}
    </Button>
  );
};

const Button = styled.button`
  border: none;
`;
