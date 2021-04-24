import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

export const RoundedButton = ({ buttonText, action }) => {
  const dispatch = useDispatch();

  return (
    <Button
      className="rounded-button"
      type="button"
      onClick={() => dispatch(action)}
    >
      {buttonText}
    </Button>
  );
};

const Button = styled.button`
  width: fit-content;
  height: 20px;
  background-color: rgb(137, 177, 187);
  border: solid white 0.5px;
  border-radius: 10px;
  color: white;
  margin-top: 10px;
  outline: none;

  &:hover,
  &:focus {
    background: rgb(90, 150, 187);
  }
`;
